function showHtml(json){
	json = eval("(" + json + ")");
	var text = '<img src='+ json.img + ' /><p class="content-top-common-title">'+json.title+'</p><span>'+json.intro+'</span>';
	$('#content-top-common').append(text);
	text = '';
	switch(json.type) {
		case '1' :
		if(json.question) {
			text = '<div class="type_1"><label>请输入名字</label><input type="text" class="skin-text-willwhite" name="my_nick" id="my_nick" style="width:182px;"></div>';
			text = text + '<div class="type_1"><label>'+json.question+'</label><input type="text" id="my_value" class="skin-text-willwhite s_value" style="width:182px;"></div>';
		} else {
			text = '<div class="type_1"><label>请输入名字</label><input type="text" class="skin-text-willwhite s_value" name="my_nick" id="my_nick" style="width:182px;"></div>';
		}
		text += '<div class="type_1"><a class="q_'+json.type+'" href="javascript:void(0);"><img id="submit_pic" src="http://cece.appgame.com/wp-content/uploads/2015/09/start_t.gif" width="190" alt="查看结果，并发送微博" title="查看结果，并发送微博"></a></div>';
		break;
		case '2' :
		case '3' :
		text = '<div class="questionList">';
		for(var i = 0, q_len = json.questionList.length; i < q_len; i++) {
			text = text + '<div class="question"><h3>' + json.questionList[i].question + '</h3>';
			for(var j = 0, a_len = json.questionList[i].answer.length; j < a_len; j++) {
				text = text + '<input name="radio" class="q_'+json.type+'" type="radio" value=' + json.questionList[i].score[j] + ' id=a' +i+j+ '><label for=a'+i+j+'>' + json.questionList[i].answer[j] + '</label><br />';
			}
			text += '</div>';
		}
		text +=  '</div>';
		break;
		case '4' :
		text = '<div><label>请输入名字</label><input type="text" class="skin-text-willwhite" name="my_nick" id="my_nick" style="width:182px;"></div>';
		text += '<div class="questionList">';
		for(var i = 0, q_len = json.questionList.length; i < q_len; i++) {
			text = text + '<div class="question"><h3>' + json.questionList[i].question + '</h3>';
			for(var j = 0, a_len = json.questionList[i].answer.length; j < a_len; j++) {
				text = text + '<input name="radio" class="q_'+json.type+'" type="radio" value=' + json.questionList[i].score[j] + ' id=a' +i+j+ '><label for=a'+i+j+'>' + json.questionList[i].answer[j] + '</label><br />';
			}
			text += '</div>';
		}
		break;
		case '5' :
		text = '<div class="questionList">';
		for(var i = 0, q_len = json.questionList.length; i < q_len; i++) {
			text = text + '<div class="question"><h3><img src=' + json.questionList[i].question + '></h3>';
			for(var j = 0, a_len = json.questionList[i].answer.length; j < a_len; j++) {
				text = text + '<input name="radio" class="q_2" type="radio" value=' + json.questionList[i].score[j] + ' id=a' +i+j+ '><label for=a'+i+j+'>' + json.questionList[i].answer[j] + '</label><br />';
			}
			text += '</div>';
		}
		text +=  '</div>';
		break;
	}
	$('#content-top-question').append(text);
	text = "<div class=c_result>";
	switch(json.resultType) {
		case '2': 
		text += "<div class=img_result><h3>您的测试结果是</h3><ul>";
		for(var i = 0, len = json.result.length; i < len; i++) {
			text = text + "<li score="+json.result[i].score+">";
			for(var j = 0, r_len = json.result[i].trueResult.length; j < r_len; j++) {
				text = text + "<img src=" + json.result[i].trueResult[j] + " ><br />";
			}
			text += "</li>";
		}
		text += "</ul></div></div>"; 
		break;
		default : 
		text += "<div class=t_result><div class=t_result_hd><h3>您的测试结果是</h3></div><div class=t_result_bd><ul>";
		for(var i = 0, len = json.result.length; i < len; i++) {
			text = text + "<li score="+json.result[i].score+">";
			if(json.resultName) {
				text += "<span class=my_nickname></span>";
			} else {
				text += "<span class=my_nickname style='display:none;'></span>";
			}
			for(var j = 0, r_len = json.result[i].trueResult.length; j < r_len; j++) {
				text = text + json.result[i].trueResult[j] + "<br />";
			}
			text += "</li>";
		}
		text += "</ul></div><div class=t_result_fd></div></div></div>";               
	}
	$('#results').append(text);
	$('#results').hide();
	$('#shareWap').hide();
	$('#my_nick').val(localStorage.getItem('ceceAppgameNickName'));
}	
function getResult(type,score) {
	if(type == 1 || type == 4) {
		var nick= $('#my_nick').val();
		localStorage.setItem('ceceAppgameNickName',nick);
		if(nick==''){alert('该字段不能为空哦~~');$('#my_nick').focus();return false;}  
	}
	if(type == 1) {
		var nick= $('#my_value').val();
		if(nick==''){alert('该字段不能为空哦~~');$('#my_value').focus();return false;} 
		var len = $('#results li').length;
		if(isNaN(score)) {
			score = Math.round(Math.random()*10*len);
		}
	}
	$('#content-top-question').hide();	
	$('#results').show();
	var r_li = $("#results li");
	var r_li_len = r_li.length;
	var r_default = 0;
	for(var i = 0; i < r_li_len; i++) {
		if(score <= r_li.eq(i).attr("score")) {
			r_li.eq(i).show().siblings().hide();
			break;
		}
		r_default++;
	}
	if(r_default == r_li_len) {
		r_li.eq(r_default-1).show().siblings().hide();
	}
	$('#shareWap').show();
}	
$(document).ready(function(){ 
	$(document).on('click', '.q_1', function () {
		getResult(1,$('.s_value').val());
    });
	var all_score = 0;
	$(document).on('click', '.q_2', function () {
		all_score += parseInt($(this).val());
		if($(this).parent('.question').next().length){
			$(this).parent('.question').hide(300);
			$(this).parent('.question').next().show(300).siblings().hide();
		} else {
			getResult(2,all_score);
		}
    });
    var next_score = 1;
	$(document).on('click', '.q_3', function () {
		next_score = $(this).val();
		if(!isNaN(next_score)){
			$(this).parent('.question').hide(300);
			$('.question').eq(next_score-1).show(300).siblings().hide();
		} else {
			getResult(3,next_score);
		}
    });  
    $(document).on('click', '.q_4', function () {
		getResult(4,$(this).val());
    });   
});