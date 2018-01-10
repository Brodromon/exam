<template>
    <div class="app">
        <h1 class="app__hdr">Новостная лента REGRU</h1>
        <input class="app__search" v-model="search" placeholder="Поиск..." type="text">
        <div class="bad-filter" v-if="filterPosts == '' && search != ''">
            <h4><strong>Упс!</strong> К сожалению, нет результатов, удовлетворяющих ваш запрос.</h4>
            <img src="data:image/png;base64,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" alt="">
        </div>
        <ul class="app_news">
            <li  class="app__news-item" v-for="(post, i) in filterPosts">
                <h3 class="app__news-hdr">{{ post.title }}</h3>
                <div class="app__news-text" v-html="post.description"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'exam2',
        data() {
            return {
                search: '',
                news: []
            }
        },
        created() {
            axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'https%3A%2F%2Fwww.reg.ru%2Fcompany%2Fnews%2Frss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
            .then(response => {
                this.news = response.data.query.results.item;
            });
        },
        computed: {
            filterPosts() {
                return this.news.filter((post) => {
                    if(post.title.toLowerCase().includes(this.search.toLowerCase())) {
                        return post.title.toLowerCase().includes(this.search.toLowerCase())
                    } else if(post.description.toLowerCase().toLowerCase().includes(this.search.toLowerCase()))
                    return post.description.toLowerCase().toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    };
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo+2:400,500,700');
* {
    font-family: "Exo 2", sans-serif;
}
body {
    margin: 0;
    padding: 0;
    background: #f7f7f7;
}
.app-hdr {
    text-align: center;
}
.app__search {
    width: 70%;
    margin-left: 15%;
    border: none;
    border: 1px #999 solid;
    border-radius: 3px;
    line-height: 30px;
    font-size: 20px;
    padding: 5px;
}
.app__news {
    padding: 0;
}
.app__news-item {
    background: #fff;
    padding: 30px 10px;
    border-radius: 6px;
    width: 90%;
    margin: 20px 0;
    margin-left: 5%;
    list-style: none;
    box-shadow: 0 0 10px #999;
}
.app__news-text {
    min-height: 200px;
}
.app__news-text img {
    height: 200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
}
.b-news-article__right {
    float: right;
}
.app__hdr {
    text-align: center;
    margin: 0 0 20px;
}
.b-link {
    padding: 10px;
    color: #fff;
    background: #0068ba;
    border-radius: 3px;
    text-decoration: none;
}
.b-link:hover {
    background: #027ad8;
}
.b-link:active {
    background: #0489f2;
}
.bad-filter {
    text-align: center;
}
@media screen and (max-width: 1023px) {
    .b-news-article__right {
        float: none;
    }
}
@media screen and (max-width: 480px) {
    .app__news-text img {
        display: none
    }
}
</style>
