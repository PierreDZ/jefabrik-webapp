<template>
    <div id="general-perso">
        <div class="background-color">
            <label for="background-color">Background colors: </label>
            <div class="colors">
                <input type="color" name="darkblue" id="darkblue" value="#30336b">
                <input type="color" name="lightgreen" id="lightgreen" value="#55efc4">
                <input type="color" name="orange" id="orange" value="#e17055">
                <input type="color" name="corail" id="corail" value="#d63031">
                <input type="color" name="blue" id="blue" value="#0984e3">
            </div>
        </div>
        <div class="buttons-color">
            <label for="background-color">Buttons colors: </label>
            <div class="colors">
                <input type="color" name="darkblue" id="darkblue" value="#30336b">
                <input type="color" name="lightgreen" id="lightgreen" value="#55efc4">
                <input type="color" name="orange" id="orange" value="#e17055">
                <input type="color" name="corail" id="corail" value="#d63031">
                <input type="color" name="blue" id="blue" value="#0984e3">
            </div>
        </div>
        <div class="footer-color">
            <label for="background-color">Footer colors: </label>
            <div class="colors">
                <input type="color" name="darkblue" id="darkblue" value="#30336b">
                <input type="color" name="lightgreen" id="lightgreen" value="#55efc4">
                <input type="color" name="orange" id="orange" value="#e17055">
                <input type="color" name="corail" id="corail" value="#d63031">
                <input type="color" name="blue" id="blue" value="#0984e3">
            </div>
        </div>
        <div class="selected-color">
            <label for="background-color">Selected colors: </label>
            <div class="colors">
                <input type="color" name="darkblue" id="darkblue" value="#30336b">
                <input type="color" name="lightgreen" id="lightgreen" value="#55efc4">
                <input type="color" name="orange" id="orange" value="#e17055">
                <input type="color" name="corail" id="corail" value="#d63031">
                <input type="color" name="blue" id="blue" value="#0984e3">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    input {
        cursor: pointer;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        -webkit-appearance: none;
        border: none;

        &::-webkit-color-swatch-wrapper {
            padding: 0;
        }

        &::-webkit-color-swatch {
            border: none;
        }
    }

    .background-color, 
    .buttons-color,
    .footer-color,
    .selected-color {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
        align-items: center;
    }
</style>