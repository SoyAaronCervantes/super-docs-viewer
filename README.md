# DocViewer

DocViewer is an application that allows you to view documents in PNG.
The website is made with Angular, Angular Material and Firebase, where I only use 3 services:
Firestore, Storage and Hosting.

# Solution
The way we tried to solve the task was thought in 2 parts:
 - The first part was to create an application that the user could navigate between the documents
and from that list could navigate to a specific document.
 - The second part was to make the user able to save and add new annotations in the document.
 Here, I had an idea more towards mobile development and I based myself on the navigation of Google Maps,
since it uses many FAB buttons to interact with the application, whether in Webapp or Mobile App.
 
# Pros & Cons

## Pros
  - The application being connected to Firestore, we have an continues communication and update of the new annotations.
This is a big advantage, because we only need the document Id to know, where we are adding a new annotations.

  - The annotations can be integrated with images and text, the idea was to be able to do both functionalities in the same annotation.
Since we know the references of the Firebase Storage images, it is easier to obtain the images from there

  - The images / documents can be zoomed in and zoomed out.

  - You can add and delete annotations
 
## Cons
It was not difficult to implement, but it was a little tedious.

I list below, the things that were missing in the application
 - You can't edit the annotations
 - You can't make the offset between documents and also the pagination

## Challenges
  - One of the most complicated things was to implement the annotations with images,
I've never worked with FormData and Angular Material is not very friendly for this type of fields.
I had to use a third-party library, to help me when uploading files.

  - The other challenge was Angular Material and its themes, I didn't remember how difficult it was to implement a color,
or try to get a variable value. I had to move from CSS to SCSS, halfway through the development.
At the end, I decided to use Material 3 Builder, but I couldn't implement the Dark Mode, because I didn't have enough time.
and it gives you each css file as a module, and I had to convert it to SCSS to use the same structure that angular requires

  - I've never used to Drag&Drop in Angular, so I had to learn how to implement it, and it was a little complicated.
Since, I always split the components and there is one property that needs a reference from a component, class o html element.
It was kind of hard to share between components, without getting issues or unknown falsy values.
At the end, I had to share a string value from a css class, to make it work.

  - Once we show an annotations, I want to show a card next to annotation point, at the beginning when you don't know how the drag&drop works,
it can be kind of complicated, because I want to show only the card, when the mouse is over the icon, but if you move the mouse outside the icon
the card disappears. So, What I had to do, is to hover from parent element and fit the size of the child and the parent element, so when we show the card,
the user can move the mouse without any problem.

# Roadmap
  - Scale the coordinates, so that they fit the zoom.
  - Implement the edit annotations
  - Implement the pagination
  - Implement the dark mode
