---
title: Gridsome 사용해 보기
date: 2020-01-13
tags: ["블로그", "이전", "WP", "WordPress", "워드프레스", "헥소", "hexo", "github"]
description: 새해를 맞이해서 Vue에 대해 공부 해보겠다는 욕심으로 블로그를 hexo에서 Gridsome으로 변경해봤습니다.
categories:
- www
---

![Gridsome](/images/gridsome.png)

## Hexo 에서 Gridsome 으로

얼마전에 [Gridsome](https://gridsome.org/)이라는 녀석을 알게 되었습니다. [Vue](https://vuejs.org/)를 기반으로 정적 html을 생성하는 프로그램인데요.

이쪽에 관심이 생기면서부터 이것저것 기웃거리고 있는데 예전 프로젝트에서 Vue를 접해 보고 마음에 들어하고 있었습니다. 단지 당시에는 Vue를 사용한 블로그가 가능한 프로젝트를 못찾았었는데 Gridsome이란 것을 알게 된 것이죠.

현재 블로그도 Gridsome을 공부하면서 개량을 해나가보기 위해 사용해보는 중인 과정중의 결과물입니다. Gridsome에서 제공되는 Starter가 있기 때문에 쉽게 전체 기능이 제공되는 것을 사용하는 것이 쉬운 방법이긴 한데요. 그냥 조금씩 공부하면서 이것저것 추가시켜 나가는 방법을 사용해 보기로 했습니다. hexo에서 뭔가 재미를 느끼지 못한 부분도 하나의 이유이긴 합니다.

## Front Matter 수정

그동안 사용했던 hexo의 Markdown 파일에서 사용하던 [Front Matter](https://hexo.io/ko/docs/front-matter.html)를 그대로 사용하는 것이 가장 좋은 것 같아서 우선은 가장 기본적인 것만 사용하며 추가가 필요한 부분은 나중에 하기로 했습니다.

기본 설정으로는 **Invalid date** 라고 출력되며 에러가 나오거나 컴파일이 멈추어 버리는 경우도 있어서 확인을 해보니 `date`의 값 문제였던 것 같아 우선은 '시:분'을 제거하고 '년-월-일'만 남게끔 수정해서 문제를 해결했습니다.

만일 동일한 날에 한개 이상의 포스팅을 했을때 어떤식으로 정렬되는지(아마도 알파벳순?) 모르겠지만 현재로선 방법을 모르기 때문에 일단 시:분은 사용하지 않을 것 같습니다.

<iframe width="100%" height="230" src="//jsfiddle.net/minamiland/vhdLtjx9/embedded/html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

기존 hexo에서 사용하던 `tags` 와 `categories`는 hexo 방식을 그대로 두어도 에러가 나오지 않기에 우선은 방치해 두고 적용시키는 방법은 업데이트해 보려 하고 있습니다. 카테고리를 아예 없애는 방법도 고민해 보고 있는 중입니다.

## URL 설정

Front Matter에 `:slug`값을 추가시킬까 하다가 hexo에서 사용하던 방식을 그대로 사용하기 위해(`.md`파일명을 그대로 주소로 사용하는 방식) `gridsome.config.js`를 수정해 주었습니다. 이로서 기존과 동일한 퍼머링크를 가지게 된것 같습니다.

<iframe width="100%" height="300" src="//jsfiddle.net/minamiland/n4dbkcw5/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Disqus 추가

댓글을 아예 없애는 방법도 고민을 하긴 했지만, 혹시나 하는 생각에 기존에 사용하던 disqus 를 그대로 유지하기로 했습니다. 다행히 인지도가 있는 만큼 Gridsome에서도 [disqus 설치 가이드](https://gridsome.org/docs/guide-comments/#install-vue-disqus)를 제공하고 있어 특별한 문제없이 설치를 마무리 했습니다.

## Source Code

[gist](https://gist.github.com/)를 사용해 보려 했는데 플러그인을 설치하고 몇가지 설정을 해줘도 제대로 작동을 하지 않아서 소스코드는 우선 [jsfiddle](https://jsfiddle.net/)을 사용, `iframe`을 적용하는 방법을 사용했습니다. 차후 문제점을 파악해서 성공하면 그때부터는 gist를 사용할 예정입니다.

## Page Title

페이지 타이틀(`<title>`) 이 제대로 동작하지 않는 문제가 있어서 이 부분을 해결하기 위해  Post.vue 파일을 수정했습니다.

<iframe width="100%" height="200" src="//jsfiddle.net/minamiland/zd1e4ywu/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 남은 과제?

우선적으로 해결해야 할 문제로는 다음과 같은 과제가 있을 것 같습니다.

- gist 사용을 위한 작업
- 리스트에 커버 이미지 표시
- tag
- category
