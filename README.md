<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://www.wopagency.com/images_github/Vuejs-Firebase-V02.png" alt="Logo" width="189" height="115">
  </a>

<h3 align="center">Vue2-Firebase9-App</h3>

  <p align="center">
    CRUD Application with Vue.js and Firebase 9
    <br />
    <a href="https://github.com/Phileader/Vue2-Firebase9-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Phileader/Vue2-Firebase9-App">View Demo</a>
    ·
    <a href="https://github.com/Phileader/Vue2-Firebase9-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/Phileader/Vue2-Firebase9-App/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Vue][Vue.js]][Vue-url]
* [![FIREBASE][FIREBASE]][FIREBASE-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Skills

* [![Google_Cloud][Google_Cloud]][Google_Cloud-url]
* [![Node][Node.js]][Node-url]
* [![Javascript][Javascript]][Javascript-url]
* [![CSS3][CSS3]][CSS3-url]
* [![HTML5][HTML5]][HTML5-url]
* [![Visual_Studio_Code][Visual_Studio_Code]][Visual_Studio_Code-url]

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Node and npm must be installed on your workstation. For versions see the "Engines" section in the project's package.json file.  
* Vue CLI
  ```sh
  npm install -g @vue/cli
  ```
The CLI ( @vue/cli ) is a globally installed npm package and provides the vue command in your terminal. Minimum version: 4.5.x.
Verify the vue-cli installed version:
* Vue CLI version
  ```sh
  vue --version
  ```
A google cloud account is required.  
You have to create a project in Firebase console with a web application and it will contain the Hosting and Firestore Database products.
After you have to install the Firebase CLI (command-line tool). It allows us to safely and swiftly host our Vue app with Firebase Hosting.
* Firebase CLI
  ```sh
  npm install -g firebase-tools
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Phileader/Vue2-Firebase9-App.git
   ```
2. Install NPM packages
   ```sh
   cd Vue2-Firebase9-App
   npm install
   ```
3. Rename the src/firebase-template.js file to src/firebaseDb.js
   ```
   ren [DIR]/src/firebase-template.js firebaseDb.js
   ```
4. In the firebaseDb.js file, fill in the Firebase SDK information.  
   These are in the parameters of the web application of your Firebase project.
 ```sh
    const firebaseConfig = {
      apiKey: "[YOUR APIKEY]",
      authDomain: "[YOUR AUTHDOMAIN]",
      databaseURL: "[YOUR DATABASEURL]",
      projectId: "[YOUR PROJECTID]",
      storageBucket: "[YOUR STORAGEBUCKET]",
      messagingSenderId: "[YOUR MESSAGINGSENDERID]",
      appId: "[YOUR APPID]"
    };
```
5. Run application
   ```sh
   npm run serve
   ```
6. The collection "users_vue" is not created and will be when you add the first user.  
   The fields will be:
   ```sh
   {
    "email": "",
    "name": "",
    "phone": ""
   }
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Login window
- [ ] Access management with Google Firebase authentication

See the [open issues](https://github.com/Phileader/Vue2-Firebase9-App/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Philippe Clevy - [@PhilClevy](https://twitter.com/PhilClevy) - pclevy@wopagency.com

Project Link: [https://github.com/Phileader/Vue2-Firebase9-App](https://github.com/Phileader/Vue2-Firebase9-App)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Phileader/Vue2-Firebase9-App?style=for-the-badge
[contributors-url]: https://github.com/Phileader/Vue2-Firebase9-App/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Phileader/Vue2-Firebase9-App?style=for-the-badge
[forks-url]: https://github.com/Phileader/Vue2-Firebase9-App/network/members
[stars-shield]: https://img.shields.io/github/stars/Phileader/Vue2-Firebase9-App?style=for-the-badge
[stars-url]: https://github.com/Phileader/Vue2-Firebase9-App/stargazers
[issues-shield]: https://img.shields.io/github/issues/Phileader/Vue2-Firebase9-App?style=for-the-badge
[issues-url]: https://github.com/Phileader/Vue2-Firebase9-App/issues
[license-shield]: https://img.shields.io/github/license/Phileader/Vue2-Firebase9-App?style=for-the-badge
[license-url]: https://github.com/Phileader/Vue2-Firebase9-App/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/philippeclevy/
[product-screenshot]: images/screenshot.png
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://html.com/html5/
[FIREBASE]:https://img.shields.io/badge/Firebase-000000?style=for-the-badge&logo=firebase
[FIREBASE-url]: https://firebase.google.com/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Google_Cloud]: https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[Google_Cloud-url]: https://cloud.google.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3.org/Style/CSS/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Visual_Studio_Code]: https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[Visual_Studio_Code-url]: https://code.visualstudio.com/
