  chrome.contextMenus.create({
    "id": "goto-profile",
    "title": "Ir para o perfil",
    "contexts": ["selection"],
    "type": "normal"
  });

  chrome.contextMenus.create({
    "id": "goto-ig",
    "parentId": "goto-profile",
    "title": "Instagram",
    "contexts": ["selection"]
  });

  chrome.contextMenus.create({
    "id": "goto-github",
    "parentId": "goto-profile",
    "title": "Github",
    "contexts": ["selection"]
  });


chrome.contextMenus.onClicked.addListener(function (info){
  let uri
  switch (info.menuItemId){
    case "goto-ig":
      uri = `http://www.instagram.com/${info.selectionText.trim()}`
      break;
    case "goto-github":
      uri = `http://www.github.com/${info.selectionText.trim()}`
      break;
  }
  chrome.tabs.create({url: uri})
  })
