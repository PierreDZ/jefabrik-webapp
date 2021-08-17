<template>
    <div id="general-perso">
        <ul class="c-btns">
            <li v-for="(btn, index) in btns" :key="index">
                <button class="c-btn" :value="btn.name" @click="changeInputs(btn.action)">
                    <InlineSvg :src="btn.icon"/>
                </button>
            </li>
        </ul>
        <div class="general-container" v-show="activeBtn === 'general'">
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
        <div class="forme-container" v-show="activeBtn === 'formes'">
            <div class="img img_1">
                <div class="img_wrapper">
                    <img src="../../assets/images/empty_image.png" alt="">
                </div>
                <input type="file" placeholder="Upload image 1">
                <input type="text" placeholder="Enter price">
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
import InlineSvg from 'vue-inline-svg';
export default {
    components: {
        InlineSvg
    },
    data () {
        return {
            btns: [
                {id: 1, name: 'General', icon: require('../../assets/images/mobygeek_settings.svg'), action: 'general'},
                {id: 2, name: 'Formes', icon: require('../../assets/images/mobygeek_forme.svg'), action: 'formes'},
                {id: 3, name: 'Matériaux', icon: require('../../assets/images/mobygeek_mat.svg')},
                {id: 4, name: 'Dimensions', icon: require('../../assets/images/mobygeek_dim.svg')},
                {id: 5, name: 'Piètements', icon: require('../../assets/images/mobygeek_piet.svg')},
                {id: 6, name: 'Passe Câbles', icon: require('../../assets/images/mobygeek_pass.svg')},
                {id: 7, name: 'Goulotte', icon: require('../../assets/images/mobygeek_goulotte.svg')},
                {id: 8, name: 'Support Ecrans', icon: require('../../assets/images/mobygeek_support.svg')}
            ],
            activeBtn: 'general',
        }
    },
    methods: {
        changeInputs (elem) {
            this.activeBtn = elem;
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
            height: 40px;
            width: 40px;
            border: 1px solid #767676;
            border-radius: 5px;
            background-color: transparent;
            align-items: center;
            justify-content: center;
            transition: .3s;

            &:hover, &:focus {
                border-color: #26ce83;
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