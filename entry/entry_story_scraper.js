const csrf = await fetch("https://playentry.org");
const body = await csrf.text();
const index = body.indexOf("csrf-token") + 21;
const csrfToken = body.slice(index, index + 36);
var loldata;

fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
  body: JSON.stringify({
    "query":"\n    query SELECT_ENTRYSTORY(\n    $pageParam: PageParam\n    $query: String\n    $user: String\n    $category: String\n    $term: String\n    $prefix: String\n    $progress: String\n    $discussType: String\n    $searchType: String\n    $searchAfter: JSON\n){\n        discussList(\n    pageParam: $pageParam\n    query: $query\n    user: $user\n    category: $category\n    term: $term\n    prefix: $prefix\n    progress: $progress\n    discussType: $discussType\n    searchType: $searchType\n    searchAfter: $searchAfter\n) {\n            total\n            list {\n                \n\tid\n    content\n    created\n    commentsLength\n    likesLength\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    image {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    sticker {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    isLike\n\n            }\n            searchAfter\n        }\n    }\n",
    "variables":{
      "category":"free",
      "searchType":"scroll",
      "term":"all",
      "discussType":"entrystory",
      "pageParam":{
        "display":640,
        "sort":"created"
      }
    }
  })})
  .then((response) => response.json())
  .then((data) => loldata = data);

var lis = loldata["data"]["discussList"]["list"];
console.log(lis);