# Restcountries & Weather using fetch API

## Bootstrap container class

> Containers are the most basic layout element in Bootstrap and are required
> when using our default grid system. Containers are used to contain, pad, and
> (sometimes) center the content within them. While containers can be nested,
> most layouts do not require a nested container.

_Empty space is 100% width_

| className         | <576 | ≥576px | ≥768px | ≥992px | ≥1200px | ≥1400px |
| ----------------- | ---- | ------ | ------ | ------ | ------- | ------- |
| .container        |      | 540px  | 720px  | 960px  | 1140px  | 1320px  |
| ..container-sm    |      | 540px  | 720px  | 960px  | 1140px  | 1320px  |
| ..container-md    |      |        | 720px  | 960px  | 1140px  | 1320px  |
| ..container-lg    |      |        |        | 960px  | 1140px  | 1320px  |
| ..container-xl    |      |        |        |        | 1140px  | 1320px  |
| ..container-xxl   |      |        |        |        |         | 1320px  |
| ..container-fluid |      |        |        |        |         |         |
|                   |      |        |        |        |         |         |

## Bootstrap card class

    class="card"
    class="card-header" --> for country name
    class="card-img-top" --> for country flag
    class="card-body" --> for country details

## Bootstrap Modal

    class="modal fade" --> create a modal
    (Provide a id name for modal to toggle)

    button which toggles the modal should contain the below data attr.
    1. data-bs-toggle="modal" --> for closing and open modal
    2. data-bs-target="#modal" --> to target a modal which it opens when clicked
