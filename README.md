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
| GET | `/` | Home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Details about a particular place |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page for editing an existing place |
| DELETE | `/places/:id` | Delete a particular place |
| POST | `/places/:id/rant` | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET | `*` | 404 page (matches any route not defined above) |

## Installation

To install necessary dependencies, run the following command:

```
npm install
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at yunhonglu0409@gmail.com. You can find more of my work at [dnsghd49](https://github.com/dnsghd49/).
