type Link = {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[] | null;
  dateCreated: Date;
};

// success state 0 || failure is -1

let links: Link[] = [];

const getLinks = () => {
  links = [];

  const listOfLinks = localStorage.getItem("links");
  if (!listOfLinks) {
    throw new Error("Links do not exist");
  } else {
    links = JSON.parse(listOfLinks);
  }
};

const getMostRecentLink = () => {
  links = [];
  getLinks();
  return links[links.length - 1];
};

const getRecentLinks = () => {
  links = [];
  getLinks();
  let currentIndex = links.length - 2;
  const listToReturn: Link[] = [];
  for (let i = 0; i < 5; i++) {
    listToReturn.push(links[currentIndex]);
    currentIndex--;
  }

  return listToReturn;
};

const saveLinks = () => {
  localStorage.setItem("links", JSON.stringify(links));
};

const createLink = (
  title: string,
  link: string,
  description: string,
  tags: string[] | null,
) => {
  links = [];
  getLinks();
  const newLink: Link = {
    id: links.length + 1,
    title,
    link,
    description,
    tags,
    dateCreated: new Date(),
  };

  if (links.length >= 0) {
    links.push(newLink);
    saveLinks();
    return 0;
  }
  return -1;
};

const readLink = (id: number) => {
  getLinks();

  if (links.length >= 0) {
    const index = links.findIndex((link) => link.id === id);
    if (index != -1) {
      return links[index];
    }
  }
};

const readAllLinks = () => {
  links = [];
  getLinks();
  if (links.length >= 0) return links;
};

const updateLinkById = (
  id: number,
  title: string,
  link: string,
  description: string,
  tags: string[] | null,
) => {
  links = [];
  getLinks();
  if (links.length >= 0) {
    const index = links.findIndex((link) => link.id === id);
    if (index > -1) {
      const updatedLink: Link = {
        id,
        title,
        link,
        description,
        tags,
        dateCreated: links[index].dateCreated,
      };

      links[index] = updatedLink;

      saveLinks();
      return 0;
    }
  }

  return -1;
};

const deleteLink = (id: number) => {
  links = [];
  getLinks();
  const index = links.findIndex((link) => link.id === id);

  if (index > -1) {
    links.splice(index, 1);
    return 0;
  }

  return -1;
};

export {
  createLink,
  readLink,
  readAllLinks,
  updateLinkById,
  deleteLink,
  getMostRecentLink,
  type Link,
  getRecentLinks,
};
