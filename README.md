This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Edit homepage

Follow those steps to change the content on the homepage

1. The short dicription
- Open the `content/HomePage` folder.
- By editing `HomePageText.md` the description of the homepage can be changed

2. The main content
- There are five boxes, which can be used to display content.
- Open the `componets` folder.
- Open the `InfoHome.jsx` file.
- There you find the functon InfoHome.
- Insert the box you wish to add to the content of you page
Example: <HomeInfoItemOneTextW title={content.titleVariable} text={content.textVariable} />
- Open the `content/HomePage` folder.
- Open the `HomePageInfo.mdx` file.
- Add new Variables. For Title/Content/Images. The Variables should match the Name to the box previosly added
Example:
export const titleVariable = "Title";
export const textVariable = "Text/Content";

Because it was requested to have all the content for the main page in one file it is harder to make changes to it.
If it is required the editing of the homepage could be simplified, but therefore there would be one document per box and this could leed to irretation.


## Edit documentation

- Open the `componets/docs` folder.
- If a .md file is added to the `/docs` folder. The content will generate in the documentation on the website
- Edit the `meta.json` file to sort the new added file amongs the others. A folder can also be sorted like a file
- If a folder is added a `meta.json` is needed to sort the content in that folder
- If the `meta.json` is not created inside a folder the files would be sort alphabetacly.


