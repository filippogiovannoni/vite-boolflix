<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="container">
            <div class="logo">
                <img src="../assets/img/BOOLFLIX-removebg-preview.png" alt="">
            </div>
            <div class="features">
                <ul>
                    <li><a class="active" href="#">Sfoglia</a></li>
                    <li><a href="#">Kids</a></li>
                </ul>
            </div>
            <div class="search">
                <input type="text" name="searchBox" id="searchBox" placeholder="Digita il nome del film">
                <button>Cerca</button>
            </div>
        </nav>
    </header>
</template>


<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    & .logo {
        width: 150px;

        & img {
            max-width: 100%;
        }
    }

    & ul {
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

    .search>input,
    button {
        border-radius: 0.25rem;
        border-style: none;
        padding: 0.25rem;
        margin: 0 0.25rem;
    }

}
</style>