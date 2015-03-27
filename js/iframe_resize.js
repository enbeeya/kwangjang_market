// iframe resize
// iframe 내부의 콘텐트 높이가 동적으로 달라지는 경우
// 프레임 콘텐트의 내용이 스크롤 없이 모두 출력될 수 있도록 해 주는것
  function autoResize(i)
  {
    var iframeHeight=
    (i).contentWindow.document.body.scrollHeight;
    (i).height=iframeHeight+20;
  }
