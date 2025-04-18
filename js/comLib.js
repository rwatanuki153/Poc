//要素を文字列として配列に push() して最後に join() して innerHTML する

var ques_id  = "<div class='container my-4 blur-q'><div class='popover popR' role='tooltip' id='";
var ques_no  = "'><div class='arrow arrow-left'></div><h3 class='popover-header popR'><img src ='img/q.svg' width='24' height='24'/>";
var ques_cpy = "<img src ='img/copy.svg' width='24' height='24' alt='copy' onclick='";
var ques_txt = "'/></h3><div class='popover-body'>";
var ques_end = "</div></div>";

var ans_id  = "<div class='container my-4 blur-a'><div class='popover popL' role='tooltip' id='";
var ans_no  = "'><div class='arrow arrow-right'></div><h3 class='popover-header'><img src ='img/ai.svg' width='24' height='24'/>";
var ans_cpy = "<img src ='img/copy.svg' width='24' height='24'";
var ans_txt = "'/></h3><div class='popover-body'>";
var ans_end = "</div></div>";

var Tcnt = 1;
//
function Jcre_ques(pid,pno,pcpy,ptxt){
    var div = [];
    div.push(ques_id + pid);
    div.push(ques_no + pno);
    div.push(ques_cpy + pcpy);
    div.push(ques_txt + ptxt + ques_end);
    var buf = div.join("");
    $result.append(buf);
}
function Jcre_ans(pid,pno,pcpy,ptxt){
  var div = [];
  div.push(ans_id + pid);
  div.push(ans_no + pno);
  div.push(ans_cpy + pcpy);
  div.push(ans_txt + ptxt + ans_end);
  div.push("<div id='no"+Tcnt+"'></div>");
  var buf = div.join("");
  $result.append(buf);
}
function Jscroll(Pcnt){
  var pelm = "#no"+Pcnt;
  //$("#chatbox").animate({scrollTop:$(pelm).offset().top});
  $("#chatbox").scrollTop($("#chatbox")[0].scrollHeight);
  $('.blur-q,.blur-a').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(pelm).scrollTop(),
    windowHeight = $(pelm).height();
      $(this).addClass('scrollin');
  });
}
  
/*
<div class='container my-4'>
    <div class='popover popR' role='tooltip' id='popover328533'>
      <div class='arrow arrow-left'></div>
      <h3 class='popover-header popR'><img src ='img/q.svg' width='24' height='24'/>&nbsp;質問　No.123456788&nbsp;&nbsp;&nbsp;<img src ='img/copy.svg' width='24' height='24' alt='copy' onclick='alert('copyしました')'/></h3>
      <div class='popover-body'>windowsにおいてUSBマイクの優先度は</div>
    </div>
</div>

<div class='container my-4'>
    <div class='popover popR' role='tooltip' id='popover328533'></div><div class='arrow arrow-left'></div><h3 class='popover-header popR'><img src ='img/q.svg' width='24' height='24'/>&nbsp;質問　No.123456788&nbsp;&nbsp;&nbsp;<img src ='img/copy.svg' width='24' height='24' alt='copy' onclick='alert('copyしました')'/></h3><div class='popover-body'>windowsにおいてUSBマイクの優先度は</div>
</div>

<!---->
<div class='container my-4'>
    <div class='popover popL' role='tooltip' id='popover328533'>
      <div class='arrow arrow-right'></div>
      <h3 class='popover-header'>
        <img src ='img/ai.svg' width='24' height='24'/>
        &nbsp;回答　No.123456788
      </h3>
      <div class='popover-body'>WindowsにおいてUSBマイクの優先度を設定することは、音声入力の効率性や生産性に影響を与えます。
        <br>
        優先度の設定方法:
        <br>            
        「サウンド設定」へ移動 → 「設定」→「システム」→「サウンド」
        <br>
        「入力デバイスの選択」 でUSBマイクを指定
        <br>
        「サウンドコントロールパネル」（「関連設定」から）で詳細設定を行い、USBマイクを「既定のデバイス」に設定
        <br>
        この設定により、リモートワークの生産性向上やオンライン会議の品質向上につながり、結果として労働効率の向上＝GDP成長を支える要素となります。</div>
    </div>
  </div>
</div>
*/
