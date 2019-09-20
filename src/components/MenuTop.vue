<template>
	<nav class="navbar navbar-expand-md navbar-light .navbar-fixed-top bg-navbar">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="hvr-fade" href="http://trungtamchuyengia.com">Trang chủ<span class="sr-only"></span></a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'header'
}
</script>

<style>
img {
    height: 10%;
    width: 20%;
}

#phone-number-badge {
    height: 35px;
    font-size: 25px;
}

.bg-navbar {
    background-color: #0067cc;
}

ul {
    margin-left: 10.5%;
    margin-top: 0;
    margin-bottom: 0;
}

ul > li > a {
    color: white;
    font-size: 35px;
}

ul > li > a:hover {
    color: white;
    text-decoration: none;
}
</style>