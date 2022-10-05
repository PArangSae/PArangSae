console.log("작품 페이지에서 쓰면 자동으로 작품을 인식해요.");

var project_id;
console.log(document.location.href)
if(document.location.href.startsWith("https://playentry.org/project/")) {
  project_id = document.location.href.slice(30, 54);
} else {
  project_id = prompt("댓글을 가리기 해제할 작품 아이디??");
}
const csrf = await fetch("https://playentry.org");
const body = await csrf.text();
const index = body.indexOf("csrf-token") + 21;
const csrfToken = body.slice(index, index + 36);
await fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
  body: JSON.stringify({"query":"\n    query SELECT_COMMENTS(\n    $pageParam: PageParam\n    $target: String\n    $searchAfter: JSON\n    $likesLength: Int\n    $groupId: ID\n){\n        commentList(\n    pageParam: $pageParam\n    target: $target\n    searchAfter: $searchAfter\n    likesLength: $likesLength\n    groupId: $groupId\n) {\n            total\n            searchAfter\n            likesLength\n            list {\n                \n    id\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    content\n    created\n    removed\n    blamed\n    commentsLength\n    likesLength\n    isLike\n    hide\n    image {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    sticker {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n\n            }\n        }\n    }\n","variables":{"target":project_id,"pageParam":{"display":5,"sort":"created","order":-1}}})})
  .then((response) => response.json())
  .then((data) => {response = data});
const total = response.data.commentList['total'];
console.log(total);
await fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
  body: JSON.stringify({"query":"\n    query SELECT_COMMENTS(\n    $pageParam: PageParam\n    $target: String\n    $searchAfter: JSON\n    $likesLength: Int\n    $groupId: ID\n){\n        commentList(\n    pageParam: $pageParam\n    target: $target\n    searchAfter: $searchAfter\n    likesLength: $likesLength\n    groupId: $groupId\n) {\n            total\n            searchAfter\n            likesLength\n            list {\n                \n    id\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    content\n    created\n    removed\n    blamed\n    commentsLength\n    likesLength\n    isLike\n    hide\n    image {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    sticker {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n\n            }\n        }\n    }\n","variables":{"target":project_id,"pageParam":{"display":total,"sort":"created","order":-1}}})})
  .then((response) => response.json())
  .then((data) => {response = data});
var comlist = response.data.commentList.list;
for (const story of comlist) {
  await fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
  body: JSON.stringify({"query":"\n    mutation SHOW_COMMENT($id: ID){\n        showComment(id: $id){\n            \n    id\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    content\n    created\n    removed\n    blamed\n    commentsLength\n    likesLength\n    isLike\n    hide\n    image {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    sticker {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n\n        }\n    }\n","variables":{"id":story.id}}
      )
    }
  );
  
}
console.log("성공!");