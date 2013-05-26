var opts = {
  container: 'epiceditor',
  basePath: 'assets/epiceditor',
  clientSideStorage: true,
  localStorageName: 'epiceditor',
  useNativeFullsreen: true,
  parser: marked,
  file: {
    name: 'epiceditor',
    defaultContent: 'Hello!',
    autoSave: 100
  },
  theme: {
    base:'/themes/base/epiceditor.css',
    preview:'/themes/preview/preview-dark.css',
    editor:'/themes/editor/epic-dark.css'
  },
  focusOnLoad: false,
  shortcut: {
    modifier: 18,
    fullscreen: 70,
    preview: 80
  }
}

var editor = new EpicEditor(opts);

$(document).ready(function () {
  editor.load();
});


$('#btn').click(function () {
  $('#res').html(editor.exportFile(null, 'html'));
});

$('#send').click(function () {
    var link = "mailto:spetz911@ya.ru"
             + "?subject=" + escape("Cool post")
             + "&body=" + escape(editor.exportFile(null, 'html'))
    ;
    window.location.href = link;
});
