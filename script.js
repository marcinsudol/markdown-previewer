// INITIAL TEXT
var initialText =
  "# Header\n## Subheader\n---\n\nText formatting examples:\n**bold text**\nInline code: `int x = 10;`\nBlock code:\n```\nconst add = (x, y) => (x + y);\n```\nBlockquote:\n> Logic will get you from A to Z; imagination will get you everywhere\n\nUnordered list:\n- item a\n- item b\n- item c\n\nOrdered list:\n1. item 1\n1. item 2\n1. item 3\n\nLink: [my pens]\n\nPicture:\n![logo]\n\n[my pens]: https://codepen.io/marsud/pens/public\n[logo]: https://brand.jquery.org/resources/jquery-mark-light.gif";

// UPDATE PREVIEW FUNCTION
var updatePreview = function updatePreview() {
  var previewHtml = marked($("#editor").val(), { breaks: true, gfm: true });
  $("#preview").html(previewHtml);
};

// FUNCTION SETS VERTICAL LAYOUT
var setVerticalLayout = function setVerticalLayout() {
  $("#windows").removeClass("layout-horizontal").addClass("layout-vertical");

  $("#btn-v").addClass("btn-active");
  $("#btn-h").removeClass("btn-active");
};

// FUNCTION SETS HORIZONTAL LAYOUT
var setHorizontalLayout = function setHorizontalLayout() {
  $("#windows").removeClass("layout-vertical").addClass("layout-horizontal");

  $("#btn-h").addClass("btn-active");
  $("#btn-v").removeClass("btn-active");
};

$(document).ready(function () {
  // START WITH HORIZONTAL LAYOUT
  setHorizontalLayout();

  // SET INITIAL TEXT
  $("#editor").val(initialText);

  // UPDATE PREVIEW
  updatePreview();

  // ADD UPDATE ACTION
  $("#editor").on("input", updatePreview);

  // ADD BUTTONS ACTIONS
  $("#btn-h").click(setHorizontalLayout);
  $("#btn-v").click(setVerticalLayout);
});
