/**
Core script to handle the entire theme and core functions
**/
var QuickSidebar = function () {
    var handleQuickSidebarToggler = function () {
        $('.dropdown-quick-sidebar-toggler a, .page-quick-sidebar-toggler, .quick-sidebar-toggler').click(function (e) {
            $('body').toggleClass('page-quick-sidebar-open'); 
        });
    };
    var handleQuickSidebarChat = function () {
	    	var wrapper = $('.page-quick-sidebar-wrapper');
	        var wrapperChat = wrapper.find('.page-quick-sidebar-chat');
	        var initChatSlimScroll = function () {
	        	var chatUsers = wrapper.find('.page-quick-sidebar-chat-users');
	        	var userTl = '<h3 class="list-heading">用户列表</h3><ul class="media-list list-items">';
	        	var chatUsersHeight  = wrapper.height() - wrapper.find('.nav-tabs').outerHeight(true);
	        	/*$.ajax({url :CONSTANT_PATH+"/user/userChats",async : false,success:function(data){
	        		var users = data.users;
		        	for(var key in users){
		        		userTl = userTl+'<li class="media" data-user-avatar='+users[key].userProfile.userPhotoUrl+' data-user-id='+users[key].userId+' data-user-name='+users[key].userName+' data-user-no='+users[key].userNo+'><div class="media-status">';
		        		if(users[key].ext9 == '1') userTl = userTl+'<span class="badge badge-danger">在</span></div>';
		        		else
		        			userTl = userTl+'<span class="badge badge-danger">0</span></div>'; 
		        			userTl = userTl+'<img class="media-object" src="'+users[key].userProfile.userPhotoUrl+'" alt="...">';
		        			userTl = userTl+'<div class="media-body"><h4 class="media-heading">'+users[key].userName+'</h4>';
		        			userTl = userTl+'<div class="media-heading-sub"> Tel:'+users[key].userTel+'</div>';
		        			userTl = userTl+'<div class="media-heading-small"> Last seen 03:10 AM </div></li>';
		        	}
	        	}});*/
	        	userTl = userTl+'</ul>';
	        	chatUsers.html(userTl);	
	            App.destroySlimScroll(chatUsers);
	            chatUsers.attr("data-height", chatUsersHeight);
	            App.initSlimScroll(chatUsers);
	        };
	        initChatSlimScroll();
	        App.addResizeHandler(initChatSlimScroll);
	        
	        wrapper.find('.page-quick-sidebar-chat-users .media-list > .media').click(function () {
		        var chatMessages = wrapperChat.find('.page-quick-sidebar-chat-user-messages');
		        var chatMessagesHeight = wrapper.height() - wrapper.find('.nav-tabs').outerHeight(true) - wrapperChat.find('.page-quick-sidebar-chat-user-form').outerHeight(true);
		        chatMessagesHeight = chatMessagesHeight - wrapperChat.find('.page-quick-sidebar-nav').outerHeight(true);
		        var toUserId = $(this).attr('data-user-id');
		        var toUserName = $(this).attr('data-user-name');
		        var toUserAvatar = $(this).attr('data-user-avatar');
		        var msgTl = '';
		        $.ajax({url :CONSTANT_PATH+"/msg/queryMsgConversations?toUserId="+toUserId,async : false,success:function(data){
		        	for(var key in data.msgs){
		        		if(data.msgs[key].toUserId==toUserId){
		        			msgTl = msgTl+'<div class="post out">';
		        			msgTl = msgTl+'<img class="avatar" alt="" src="'+toUserAvatar+'" />';
		        			msgTl = msgTl+'<div class="message">';
		        			msgTl = msgTl+'<span class="arrow"></span>['+toUserName+']<span class="datetime"> '+data.msgs[key].createdTime+'</span>'; 
		        			msgTl = msgTl+'<span class="body">'+data.msgs[key].msgContent+'</span></div></div>';
		        		}else{
		        			msgTl = msgTl+'<div class="post in">';
		        			msgTl = msgTl+'<img class="avatar" alt="" src="'+data.user.userProfile.userPhotoUrl+'" />';
		        			msgTl = msgTl+'<div class="message">';
		        			msgTl = msgTl+'<span class="arrow"></span>['+toUserName+']<span class="datetime"> '+data.msgs[key].createdTime+'</span>'; 
		        			msgTl = msgTl+'<span class="body">'+data.msgs[key].msgContent+'</span></div></div>';
		        		}
		        	 }
	        		}});
			        msgTl = msgTl+'</ul>';	
			        chatMessages.html(msgTl);	
		            App.destroySlimScroll(chatMessages);
		            chatMessages.attr("data-height", chatMessagesHeight);
		            App.initSlimScroll(chatMessages);
			        wrapperChat.addClass("page-quick-sidebar-content-item-shown");
	        });
	        
	        wrapper.find('.page-quick-sidebar-chat-user .page-quick-sidebar-back-to-list').click(function () {
	            wrapperChat.removeClass("page-quick-sidebar-content-item-shown");
	        });
	        
	        var handleChatMessagePost = function (e) {
	            e.preventDefault();
	            var chatContainer = wrapperChat.find(".page-quick-sidebar-chat-user-messages");
	            var input = wrapperChat.find('.page-quick-sidebar-chat-user-form .form-control');
	            var text = input.val();
	            if (text.length === 0) {
	                return;
	            }
	
	            var preparePost = function(dir, time, name, avatar, message) {
	                var tpl = '';
	                tpl += '<div class="post '+ dir +'">';
	                tpl += '<img class="avatar" alt="" src="' + Layout.getLayoutImgPath() + avatar +'.jpg"/>';
	                tpl += '<div class="message">';
	                tpl += '<span class="arrow"></span>';
	                tpl += '<a href="#" class="name">Bob Nilson</a>&nbsp;';
	                tpl += '<span class="datetime">' + time + '</span>';
	                tpl += '<span class="body">';
	                tpl += message;
	                tpl += '</span>';
	                tpl += '</div>';
	                tpl += '</div>';
	                return tpl;
	            };
	            var time = new Date();
	            var message = preparePost('out', (time.getHours() + ':' + time.getMinutes()), "Bob Nilson", 'avatar3', text);
	            message = $(message);
	            chatContainer.append(message);
	            chatContainer.slimScroll({
	                scrollTo: '1000000px'
	            });
	            input.val("");
//	            setTimeout(function(){
	                var time = new Date();
	                var message = preparePost('in', (time.getHours() + ':' + time.getMinutes()), "Ella Wong", 'avatar2', 'Lorem ipsum doloriam nibh...');
	                message = $(message);
	                chatContainer.append(message);
	                chatContainer.slimScroll({
	                    scrollTo: '1000000px'
	                });
//	            }, 3000);
	        };
	        wrapperChat.find('.page-quick-sidebar-chat-user-form .btn').click(handleChatMessagePost);
	        wrapperChat.find('.page-quick-sidebar-chat-user-form .form-control').keypress(function (e) {
	            if (e.which == 13) {
	                handleChatMessagePost(e);
	                return false;
	            }
	        });
    };
    return {
        init: function () {
            window.setInterval(handleQuickSidebarToggler(),1000);
            handleQuickSidebarChat();
        }
    };
}();

if (App.isAngularJsApp() === false) { 
    jQuery(document).ready(function() {    
       QuickSidebar.init();
    });
}