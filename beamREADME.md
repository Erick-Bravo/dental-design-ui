Engineering Internship Kata
=================

Beam is an exciting company, founded on the idea that everyone deserves access to dental care. As such, we want to share this vision in a presentable and exciting way!
This kata involves bringing a marketing site from a mock up to reality.


Instructions
------------
Please read through the user stories below and implement the functionality to complete them according to their requirements. The code design is entirely up to you as long as the solution can be run with npm or yarn start/opening an HTML file.

As there are often trade offs when crafting a solution, the following is the priority of what we are considering when reviewing your kata:
- Functionality - Does it fulfill the requirements and work correctly?
- Style - Does the solution adhere to the mock up?
- Responsiveness - Does the solution respond appropriately across browsers and across screen sizes?

Please add a section explaining the technical and style decisions involved in designing your solution. What options were you considering at various levels (eg. breakpoint choices, layout choices, and design, as applicable) and what were the tradeoffs in choosing one option over another? Feel free to include this section here in this README.

-------------------------------------------
### Dev Notes </b>

Breaking down the provided mock-up, these elements are provided (in order):
-   Navbar at top - logo left, individual section right containing 3 drop down and 2 buttons.
-   Gradient section w/ header - will need to be position absolute.
-   Video - Lays over the gradient section. This is an embeded video 1440x357
-   Title for about - "Our Mission & Vision"
-   Text section - 710px w x 286px h
-   Leadership Section - this is be a seperate component taking in data as a prop.
-   Our Invester - slightly darker colored banner with logos of invester companies
-   Footer - logo left with 5 sections of columns of associated links.

Using semantic HTML, it is encouraged to replace generic divs with more contextual tags. Semantic tags for this project: 
-   nav
-   header
-   main
-   section
-   footer

Media Queries will be used for a more responsive design
- various screen sizes as needed by response of content.

Flex box will definately be used. 

All-in-all seems like a straight forward design. At the moment of initial start, I am not considering any other technical methods, and I am only going to do media queries for small devices.

### During Development

Admittedly, I still have trouble when position: absolute is present. Sometime display:flex does not work on position absolute and I have major alignment issues.
-   with the presents of left, right, top, bottom flex ignores the section.
-   had to ditch the original styles from figma to get it to work

The next sections after the video will not be position absolute as I think I can get away with just using flexbox.
I wonder if the senior dev has an opinion on avoiding using position absolute.
Had to delete absolute in the leadership cards, cards were stacking over each other with suggested styling.
But in other places it is needed. Still need time with absolute.

Found a good article to which talks about resizing embeded video since I was having trouble - https://www.smashingmagazine.com/2014/02/making-embedded-content-work-in-responsive-design/

I did have to add a width: 100% to the video-container, since was not showing. From I learned earlier on display: absolute, the container wont show without some type of sizing for width and height.

### Media Query thoughts
Just read a good article on responsive design 
- https://www.toptal.com/responsive-web/introduction-to-responsive-web-design-pseudo-elements-media-queries
This is where I discovered psuedo elements by using display: none in media queries.
I will use this for the background images since it looks a little funky when under text.
- I believe I mostly just need to change the sizing and margin-top in most area. The only thing I know will need a lot of work is the navbar. It should keep the logo while displaying the a hamburger. onClick, should open the drop down the links and buttons. After this I am done.

Decided to compramise on the navbar functionality and just have psuedo elements in navbar contents, which then disapear under media queries. Then the Beam Dental hamburger appears.

I am wondering how small a screen size is the default minimum. I gauged for the iphone 5 at 320 x 568

### After Though
Overall, this has been a really great excersize. I became more familiar with display: absolute and its characteristic. I also gained a lot of experience with media queries. I have not used media queries to that extend yet, but rather enjoys it and will take that to my own personal projects.
Cant wait to hear feedback from this excersize.





--------------------------------------------

Resources to get you started:

- [Figma Mockup](https://www.figma.com/proto/ZN9GQfR0wSgf6jGALBb0uM/Web-Dev-Kata?node-id=1%3A2&scaling=min-zoom)
    - Note: If you don't have a Figma account, one would need to be created in order to get the editor view
- [How to export assets from Figma](https://help.figma.com/hc/en-us/articles/360040514533-Export-to-PNG-JPG-SVG-or-PDF-with-Export-Settings)
- For a guide to working with oEmbed + Vimeo videos, [check out this link]('https://developer.vimeo.com/api/oembed/videos'). Alternatively, you can [visit this link](https://vimeo.com/api/oembed.json?url=https://vimeo.com/327864855) for metadata to help with embedding the marketing video referenced in this guide.

Submitting your work to Beam
---------------------------------
Please include a .nvmrc file with your submission so we know version of node you are using. There are differences between versions that can be significant to your application's runtime versus your reviewer's installed node version.

Once you're happy with your submission, you can send it back in one of two formats; either as a git bundle or a zip file.

To create the git bundle simply execute:

```shell
cd engineering-internship-kata
git bundle create engineering-internship-kata.bundle <YOUR BRANCH NAME HERE>
```

This will create a .bundle file which contains the entire git repository in binary form, so you can easily send it as an attachment. Alternatively, you could zip the project instead.

To ensure that our review of your kata remains as unbiased as possible, your submission will be anonymized before it is reviewed. To help us with this process, please double check that any personally identifiable information, such as your name or email address, is removed from your code, readme or any commit messages. Your author and committer information will be scrubbed by our anonymizing process.

High Level Scope
--------------------
At a high level, this kata should accomplish the following:
* Page Layout as close as possible to the one provided in the mock up
* Page should use semantic HTML
* Provide a responsive design depending on screen size (desktop and mobile)

User Stories
--------------
**Page Layout**

_As a Marketing Executive_<br>
_In order to promote Beam's Mission_<br>
_I want to view Beam's Mission and Vision page_<br>

**Acceptance Criteria**
* Create a cross-browser supported (Chrome, Safari, Edge) layout as close to the mock up as possible
* Leadership links and images should leverage the JSON Noted below
* Other links can behave as links but do not need to go anywhere
* Ensure the hover effect is performed over each leadership team member
* Provide a responsive design depending on screen size (desktop and mobile)
 
 <br>

***Responsive Design***
_As a Marketing Executive_<br>
_In order to increase user friendless and broaden our impact_<br>
_I want the marketing page to be responsive_<br>

We have intentionally left out a responsive design layout from the mock up. This is an opportunity for us to see how you could implement a responsive design, given the desktop specs version.

**Acceptance Criteria**

* Page is responsive for both desktop and mobile

***The Marketing API***

Please read the user story on the next page and implement the functionality to complete them according to their requirements.
Resources

* Figma Mockup https://www.figma.com/proto/ZN9GQfR0wSgf6jGALBb0uM/Web-Dev-Kata?node-id=1%3A2&scaling=min-zoom


***User Story***

***Load Leadership Team from an API***

As a Marketing Executive I want to view the leadership team dynamically So that there’s not a code change required when changes in leadership occur


***Scope***

Replace the statically loaded leadership with leadership that comes from the following API: https://beamtech.github.io/marketing-kata-html/leadership-team.json

