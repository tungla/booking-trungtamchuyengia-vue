<template>
	<nav class="navbar navbar-expand-md navbar-light .navbar-fixed-top">
        <div class="container">
            <img src="@/assets/header_banner.png">
            </img>
            <div>
                <span id="phone-number-badge" class="badge badge-info"><font-awesome-icon icon="phone" /></i> 093 793 5502
                </span>
            </div>
        </div>
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
</style>