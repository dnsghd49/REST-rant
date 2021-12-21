# REST-rant
  [![GitHub contributors](https://img.shields.io/github/contributors/dnsghd49/REST-rant.svg)](https://GitHub.com/dnsghd49/REST-rant/graphs/contributors/)
  [![Build Status](https://img.shields.io/github/forks/dnsghd49/REST-rant.svg)](https://github.com/dnsghd49/REST-rant/network/)
  [![Build Status](https://img.shields.io/github/stars/dnsghd49/REST-rant.svg)](https://github.com/dnsghd49/REST-rant/)
  [![GitHub issues](https://img.shields.io/github/issues/dnsghd49/REST-rant.svg)](https://GitHub.com/dnsghd49/REST-rant/issues/)
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## Description

basic setup for the project!

## Table of Contents 

* [Routes](#Routes)

* [Installation](#installation)

* [Usage](#usage)

* [Questions](#questions)

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

## Installation

To install necessary dependencies, run the following command:

```
npm install
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at yunhonglu0409@gmail.com. You can find more of my work at [dnsghd49](https://github.com/dnsghd49/).
