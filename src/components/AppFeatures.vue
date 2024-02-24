<script>
export default {
    name: 'AppFeatures'
}
</script>
<template>
    <div class="features">
        <ul>
            <li><a class="active" href="#">Sfoglia</a></li>
            <li><a href="#">Kids</a></li>
        </ul>
    </div>
</template>


<style scoped>
ul {
    display: flex;
    list-style: none;
    gap: 1rem;

    & a.active {
        color: var(--bool-primary);
    }

    & a {
        text-decoration: none;
        color: var(--bool-light);
    }
}
</style>