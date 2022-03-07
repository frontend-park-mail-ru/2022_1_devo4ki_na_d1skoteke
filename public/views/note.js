import { CreateLeftSide } from "../components/LeftSideBar/LeftSideBar.js";

export const note = (node) => {
    const page = document.createElement("div");
  
    page.classList.add("notion__whole__page");
  
    CreateLeftSide(page, {name: "jhosua"});

    createNotionContent(page);

    node.appendChild(page);
  };
  
  const createSidebar = (node) => {
    let sidebar = document.createElement("div");
  
    sidebar.classList.add("notion__sidebar");
  
    createSidebarBio(sidebar);
  
    createNotionNavigation(sidebar);
  
    createDeathNote(sidebar);
  
    createSidebarNewPage(sidebar);
  
    node.appendChild(sidebar);
  };
  

const createSidebarBio = (node) => {
    let tmp = document.createElement("div");
    tmp.classList.add("notion__sidebar__bio");
    createBioProfileName(tmp);
    createBioCollapser(tmp);
    node.appendChild(tmp);
  };

  
  const createBioProfileName = (node) => {
    let profilename = document.createElement("div");
    profilename.classList.add("notion__sidebar__bio__profilename");
  
    let profileName = document.createElement("div");
    let profileNameImg = document.createElement("img");
    profileNameImg.setAttribute(
      "src",
      "https://lh3.googleusercontent.com/a-/AOh14Ggo62gr8BTTecwfg3uGVTFoxat5d2cDxL59mUTWrA=s100"
    );
  
    profileNameImg.classList.add("notion__sidebar__bio__img");
  
    profileName.appendChild(profileNameImg);
  
    let text = document.createElement("div");
  
    text.innerText = "Username's Notion";
  
    profilename.appendChild(profileName);
  
    profilename.appendChild(text);
  
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg.setAttribute("fill", "none");
    iconSvg.setAttribute("viewBox", "-1 -1 9 11");
    iconSvg.setAttribute("stroke", "black");
    iconSvg.classList.add("notion__sidebar__bio__profilename__switch");
  
    iconPath.setAttribute(
      "d",
      "M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
    );
  
    iconSvg.appendChild(iconPath);
  
    profilename.appendChild(iconSvg);
  
    node.appendChild(profilename);
  };
  
  const createBioCollapser = (node) => {
    let bioCollapser = document.createElement("div");
  
    bioCollapser.classList.add("notion__sidebar__bio__colapser");
  
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg.setAttribute("viewBox", "0 0 14 14");
    iconPath.setAttribute(
      "d",
      "M7 2.225L5.775 1L0 7.125L5.775 13.25L7 12.025L2.45 7.125L7 2.225ZM14 2.225L12.775 1L7 7.125L12.775 13.25L14 12.025L9.45 7.125L14 2.225Z"
    );
  
    iconSvg.appendChild(iconPath);
  
    bioCollapser.appendChild(iconSvg);
    node.appendChild(bioCollapser);
  };
  
  const createNotionNavigation = (node) => {
    let navigation = document.createElement("div");
  
    navigation.classList.add("notion__sidebar__navigation");
  
    let itemFind = document.createElement("div");
    itemFind.classList.add("notion__sidebar__navigation__item");
    itemFind.innerText = "Quick Find";
  
    let itemUpdates = document.createElement("div");
    itemUpdates.classList.add("notion__sidebar__navigation__item");
    itemUpdates.innerText = "All Updates";
  
    let itemSettings = document.createElement("div");
    itemSettings.classList.add("notion__sidebar__navigation__item");
    itemSettings.innerText = "Settings & Members";
  
    navigation.appendChild(itemFind);
    navigation.appendChild(itemUpdates);
    navigation.appendChild(itemSettings);
  
    node.appendChild(navigation);
  };
  
  const createDeathNoteItem = (node) => {
    let Item = document.createElement("div");
    Item.classList.add("notion__sidebar__deathnote__item");
  
    let ItemBio = document.createElement("div");
  
    ItemBio.classList.add("notion__sidebar__deathnote__item__bio");
    ItemBio.innerText = "Note's Name & Pic";
  
    Item.appendChild(ItemBio);
  
    let ItemAction = document.createElement("div");
    ItemAction.classList.add("notion__sidebar__deathnote__item__action");
  
    let ItemActionFirst = document.createElement("div");
    ItemActionFirst.classList.add(
      "notion__sidebar__deathnote__item__action_item"
    );
  
    let ItemActionSecond = document.createElement("div");
    ItemActionSecond.classList.add(
      "notion__sidebar__deathnote__item__action_item"
    );
  
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg.setAttribute("viewBox", "0 0 16 16");
    iconPath.setAttribute(
      "d",
      "M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"
    );
  
    iconSvg.appendChild(iconPath);
  
    ItemActionFirst.appendChild(iconSvg);
  
    const iconSvg2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg2.setAttribute("viewBox", "0 0 26 26");
    iconPath2.setAttribute(
      "d",
      "M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"
    );
  
    iconSvg2.appendChild(iconPath2);
  
    ItemActionSecond.appendChild(iconSvg2);
  
    ItemAction.appendChild(ItemActionFirst);
  
    ItemAction.appendChild(ItemActionSecond);
  
    Item.appendChild(ItemAction);
  
    node.appendChild(Item);
  };
  
  const createBasicsItem = (node) => {
    let Item = document.createElement("div");
    Item.classList.add("notion__sidebar__deathnote__item");
  
    let ItemBio = document.createElement("div");
  
    ItemBio.classList.add("notion__sidebar__deathnote__item__bio");
    ItemBio.innerText = "Templates";
  
    Item.appendChild(ItemBio);
  
    node.appendChild(Item);
  };
  
  const createDeathNoteBasics = (node) => {
    const basics = document.createElement("div");
    basics.classList.add("notion__sidebar__deathnote__basics");
    createBasicsItem(basics);
    createBasicsItem(basics);
    createBasicsItem(basics);
    node.appendChild(basics);
  };
  
  const createDeathNote = (node) => {
    let deathNode = document.createElement("div");
  
    deathNode.classList.add("notion__sidebar__deathnote");
  
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
    createDeathNoteItem(deathNode);
  
    createDeathNoteBasics(deathNode);
  
    node.appendChild(deathNode);
  };
  
  const createSidebarNewPage = (node) => {
    const newPage = document.createElement("div");
    newPage.classList.add("notion__sidebar__newpage");
  
    const newPageContainer = document.createElement("div");
    newPageContainer.classList.add("notion__sidebar__newpage__container");
  
    const newPageContainerPlus = document.createElement("div");
    newPageContainerPlus.classList.add(
      "notion__sidebar__newpage__container__plus"
    );
  
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg.setAttribute("viewBox", "0 0 16 16");
    iconPath.setAttribute(
      "d",
      "M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"
    );
  
    iconSvg.appendChild(iconPath);
    newPageContainerPlus.appendChild(iconSvg);
  
    const newPageDiv = document.createElement("div");
    newPageDiv.innerText = "New page";
  
    newPageContainer.appendChild(newPageContainerPlus);
    newPageContainer.appendChild(newPageDiv);
  
    newPage.appendChild(newPageContainer);
  
    node.appendChild(newPage);
  };
  
  const createNotionContentNavbar = (node) => {
    const contentNavbar = document.createElement("div");
    contentNavbar.classList.add("notion__content__navbar");
  
    const contentNavbarDocname = document.createElement("div");
    contentNavbarDocname.classList.add("notion__content__navbar__docname");
  
    contentNavbarDocname.innerText = "user document freevole name";
  
    const navbarActions = document.createElement("div");
    navbarActions.classList.add("notion__content__navbar__actions");
  
    const navbarActionsItem = document.createElement("div");
    navbarActionsItem.classList.add("notion__content__navbar__actions__item");
    navbarActionsItem.style = "margin-right: 20px;";
    navbarActionsItem.innerText = "Share";
  
    const navbarActionsItem2 = document.createElement("div");
    navbarActionsItem2.classList.add("notion__content__navbar__actions__item");
  
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg.setAttribute("viewBox", "0 0 27 27");
    iconPath.setAttribute(
      "d",
      "M8.74414 24.6816C9.22266 24.6816 9.55469 24.4277 10.1504 23.9004L13.5195 20.9023H19.7891C22.6992 20.9023 24.2617 19.291 24.2617 16.4297V8.94922C24.2617 6.08789 22.6992 4.47656 19.7891 4.47656H7.21094C4.30078 4.47656 2.73828 6.07812 2.73828 8.94922V16.4297C2.73828 19.3008 4.30078 20.9023 7.21094 20.9023H7.67969V23.4414C7.67969 24.1934 8.06055 24.6816 8.74414 24.6816ZM9.14453 22.8945V20.0625C9.14453 19.5352 8.93945 19.3301 8.41211 19.3301H7.21094C5.23828 19.3301 4.31055 18.3242 4.31055 16.4199V8.94922C4.31055 7.04492 5.23828 6.04883 7.21094 6.04883H19.7891C21.752 6.04883 22.6895 7.04492 22.6895 8.94922V16.4199C22.6895 18.3242 21.752 19.3301 19.7891 19.3301H13.4609C12.9141 19.3301 12.6406 19.4082 12.2695 19.7891L9.14453 22.8945ZM8.4707 9.99414H18.4121C18.7246 9.99414 18.9688 9.75 18.9688 9.42773C18.9688 9.125 18.7246 8.87109 18.4121 8.87109H8.4707C8.1582 8.87109 7.9043 9.125 7.9043 9.42773C7.9043 9.75 8.1582 9.99414 8.4707 9.99414ZM8.4707 13.1777H18.4121C18.7246 13.1777 18.9688 12.9238 18.9688 12.6016C18.9688 12.2988 18.7246 12.0449 18.4121 12.0449H8.4707C8.1582 12.0449 7.9043 12.2988 7.9043 12.6016C7.9043 12.9238 8.1582 13.1777 8.4707 13.1777ZM8.4707 16.3516H14.9355C15.248 16.3516 15.4922 16.1074 15.4922 15.7949C15.4922 15.4727 15.248 15.2188 14.9355 15.2188H8.4707C8.1582 15.2188 7.9043 15.4727 7.9043 15.7949C7.9043 16.1074 8.1582 16.3516 8.4707 16.3516Z"
    );
  
    iconSvg.appendChild(iconPath);
  
    navbarActionsItem2.appendChild(iconSvg);
  
    const navbarActionsItem3 = document.createElement("div");
    navbarActionsItem3.classList.add("notion__content__navbar__actions__item");
  
    const iconSvg2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg2.setAttribute("viewBox", "0 0 20 20");
    iconSvg2.classList.add("topbarUpdate");
    iconPath2.setAttribute(
      "d",
      "M10.0781 18.1562C14.5078 18.1562 18.1641 14.5 18.1641 10.0781C18.1641 5.65625 14.5 2 10.0703 2C5.64844 2 2 5.65625 2 10.0781C2 14.5 5.65625 18.1562 10.0781 18.1562ZM10.0781 16.5469C6.49219 16.5469 3.625 13.6641 3.625 10.0781C3.625 6.49219 6.49219 3.61719 10.0703 3.61719C13.6562 3.61719 16.5391 6.49219 16.5469 10.0781C16.5547 13.6641 13.6641 16.5469 10.0781 16.5469ZM6.14062 11.0625H10.0703C10.4297 11.0625 10.7031 10.7891 10.7031 10.4375V5.32812C10.7031 4.97656 10.4297 4.70312 10.0703 4.70312C9.72656 4.70312 9.45312 4.97656 9.45312 5.32812V9.8125H6.14062C5.78906 9.8125 5.51562 10.0859 5.51562 10.4375C5.51562 10.7891 5.78906 11.0625 6.14062 11.0625Z"
    );
  
    iconSvg2.appendChild(iconPath2);
  
    navbarActionsItem3.appendChild(iconSvg2);
  
    const navbarActionsItem4 = document.createElement("div");
    navbarActionsItem4.classList.add("notion__content__navbar__actions__item");
  
    const iconSvg3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg3.setAttribute("viewBox", "0 0 20 20");
    iconSvg3.classList.add("topbarComment");
    iconPath3.setAttribute(
      "d",
      "M4.77321 18.0645C5.14821 18.3457 5.60915 18.252 6.1404 17.8691L10.2029 14.8848L14.2576 17.8691C14.7888 18.252 15.2498 18.3457 15.6248 18.0645C15.992 17.7832 16.0701 17.3223 15.8591 16.7051L14.2576 11.9395L18.3513 9.00195C18.8826 8.62695 19.1013 8.20508 18.9529 7.76758C18.8045 7.33008 18.3904 7.11133 17.7341 7.11914L12.7185 7.1582L11.1873 2.36133C10.9841 1.73633 10.6638 1.40039 10.2029 1.40039C9.73415 1.40039 9.41383 1.73633 9.21071 2.36133L7.68727 7.1582L2.66383 7.11914C2.00758 7.11133 1.59352 7.33008 1.44508 7.75977C1.29665 8.20508 1.52321 8.62695 2.04665 9.00195L6.1404 11.9395L4.53883 16.7051C4.3279 17.3223 4.40602 17.7832 4.77321 18.0645Z"
    );
  
    iconSvg3.appendChild(iconPath3);
  
    navbarActionsItem4.appendChild(iconSvg3);
  
    const navbarActionsItem5 = document.createElement("div");
    navbarActionsItem5.classList.add("notion__content__navbar__actions__item");
  
    const iconSvg4 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath4 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
  
    iconSvg4.setAttribute("viewBox", "0 0 26 26");
    iconPath4.setAttribute(
      "d",
      "M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"
    );
  
    iconSvg4.appendChild(iconPath4);
  
    navbarActionsItem5.appendChild(iconSvg4);
  
    navbarActions.appendChild(navbarActionsItem);
    navbarActions.appendChild(navbarActionsItem2);
    navbarActions.appendChild(navbarActionsItem3);
    navbarActions.appendChild(navbarActionsItem4);
    navbarActions.appendChild(navbarActionsItem5);
  
    contentNavbar.appendChild(contentNavbarDocname);
    contentNavbar.appendChild(navbarActions);
  
    node.appendChild(contentNavbar);
  };
  
  const createNotionContentTitle = (node) => {
    const documentTitle = document.createElement("div");
    documentTitle.classList.add("notion__content__document__title");
  
    const documentTitleImage = document.createElement("div");
    documentTitleImage.innerText = "image";
  
    documentTitle.appendChild(documentTitleImage);
  
    const documentTitleButtons = document.createElement("div");
    documentTitleButtons.innerText = "buttons";
    documentTitle.appendChild(documentTitleButtons);
  
    const Title = document.createElement("div");
    Title.classList.add("text_big");
  
    Title.setAttribute("spellcheck", "true");
    Title.setAttribute("placeholder", " ");
    Title.setAttribute("data-content-editable-leaf", "true");
    Title.setAttribute("contenteditable", "true");
  
    Title.innerText = "Name title";
  
    documentTitle.appendChild(Title);
  
    node.appendChild(documentTitle);
  };
  
  const createDocumentItsetlfInput = (node) => {
    const inputForm = document.createElement("div");
    inputForm.classList.add("text_regular");
  
    inputForm.setAttribute("spellcheck", "true");
    inputForm.setAttribute("placeholder", " ");
    inputForm.setAttribute("data-content-editable-leaf", "true");
    inputForm.setAttribute("contenteditable", "true");
    inputForm.innerText = "";
    
    if (node.lastChild === null) {
      console.log('hehe');
      node.appendChild(inputForm);
    }
    // node.appendChild(inputForm);
    // let insertBefore = inputForm.nextSibling;
    // console.log(node.lastChild);


    inputForm.addEventListener("keyup", function(event) {


      ////////////// событие происходит внутри inputForm
      // create tmpNode;
      // insertBEfore(inputForm->nextChild), inputForm->nextChild если nextChild != 0
      // input.parendNode.appendChild(tm  pNode);

      event.preventDefault();
      if (event.keyCode === 13) {

        let tmpNode = createDocumentItsetlfInput(node)
        if (inputForm.nextSibling !== null) {
          inputForm.parentNode.insertBefore(tmpNode, inputForm.nextSibling);
          console.log("this one")
          tmpNode.focus();
          
          return;
        } else {
          console.log("and that one")

          inputForm.parentNode.appendChild(tmpNode);
            
        tmpNode.focus();
        // tmpNode.select();
          return;
        }

  


      }
    });
    return inputForm;
  };
  
  const createNotionContentDocumentItself = (node) => {
    const documentItself = document.createElement("div");
    documentItself.classList.add("notion__content__document__itself");
  
    createDocumentItsetlfInput(documentItself);
    createDocumentItsetlfInput(documentItself);
    createDocumentItsetlfInput(documentItself);

  
    node.appendChild(documentItself);
  };
  
  const createNotionContent = (node) => {
    const content = document.createElement("div");
    content.classList.add("notion__content");
  
    createNotionContentNavbar(content);
  
    createNotionContentTitle(content);
  
    createNotionContentDocumentItself(content);
  
    node.appendChild(content);
  };

  export default note;
