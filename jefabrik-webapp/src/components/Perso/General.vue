<template>
    <div id="general-perso">
        <ul class="c-btns">
            <li v-for="(btn, index) in btns" :key="index">
                <button class="c-btn" :value="btn.name">
                    <IconifyIcon class="btn-icon" :icon="btn.icon" />
                </button>
            </li>
        </ul>
        <div class="input-container">
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
        <button class="save-changes">Save Changes</button>
    </div>
</template>

<script>
import IconifyIcon from '@iconify/vue';
import settingsIcon from '@iconify-icons/ci/settings';

export default {
    components: {
        IconifyIcon
    },
    data () {
        return {
            btns: [
                {id: 1, name: 'General', icon: settingsIcon},
                {id: 2, name: 'Formes'},
                {id: 3, name: 'Matériaux'},
                {id: 4, name: 'Dimensions'},
                {id: 5, name: 'Piètements'},
                {id: 6, name: 'Passe Câbles'},
                {id: 7, name: 'Goulotte'},
                {id: 8, name: 'Support Ecrans'}
            ]
        }
    }
}
</script>

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

    .c-btns {
        display: flex;
        justify-content: space-around;
        list-style: none;

        .c-btn {
            display: flex;
            cursor: pointer;
            height: 28px;
            width: 28px;
            border: 1px solid #767676;
            border-radius: 5px;
            background-color: transparent;
            align-items: center;
            justify-content: center;

            .btn-icon {
                height: 20px;
                width: 20px;
                color: #767676;
            }
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

    .save-changes {
        align-self: center;
        cursor: pointer;
        height: 54px;
        width: 80%;
        border-radius: 10px;
        border: 1px solid #26ce83;
        background-color: transparent;
        color: #26ce83;
        font-size: 16px;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #26ce83;
            color: white;
        }
    }
</style>