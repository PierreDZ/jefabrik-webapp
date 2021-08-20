<template>
  <div id="general-perso">
    <ul class="c-btns">
      <li v-for="(btn, index) in btns" :key="index">
        <button class="c-btn" :value="btn.name" @click="changeInputs(btn.name)">
          <InlineSvg :src="btn.icon" />
        </button>
      </li>
    </ul>
    <div class="general-container" v-show="activeBtn === 'General'">
      <div class="background-color">
        <label for="background-color">Background colors: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="buttons-color">
        <label for="background-color">Buttons colors: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="footer-color">
        <label for="background-color">Footer colors: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="selected-color">
        <label for="background-color">Selected colors: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
    </div>
    <div class="forme-container" v-show="activeBtn === 'Formes'">
      <div class="img img_1">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img_2">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img_3">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img_4">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
    </div>
    <div class="mat-container" v-show="activeBtn === 'Matériaux'">
      <div class="img img-mat">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-mat">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-mat">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-mat">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-mat">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
    </div>
    <div class="dimensions-container" v-show="activeBtn === 'Dimensions'">
      <input type="text" placeholder="Choose Longueur min en mm" v-model="datas.$set.name"/>
      <input type="text" placeholder="Choose Longueur max en mm" />
      <input type="text" placeholder="Choose Largeur min en mm" />
      <input type="text" placeholder="Choose Largeur max en mm" />
    </div>
    <div class="piet-container" v-show="activeBtn === 'Piètements'">
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="background-color">
        <label for="background-color">Color 1: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 2: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 3: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
    </div>
    <div class="cables-container" v-show="activeBtn === 'Passe Câbles'">
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="background-color">
        <label for="background-color">Color 1: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 2: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 3: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
    </div>
    <div class="goulotte-container" v-show="activeBtn === 'Goulotte'">
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="background-color">
        <label for="background-color">Color 1: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 2: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 3: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
    </div>
    <div class="support-container" v-show="activeBtn === 'Support Ecrans'">
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="img img-piet">
        <div class="img_wrapper">
          <img src="../../assets/images/empty_image.png" alt="" />
        </div>
        <input type="file" placeholder="Upload image 1" />
        <input type="text" placeholder="Enter price" />
      </div>
      <div class="background-color">
        <label for="background-color">Color 1: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 2: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
      <div class="background-color">
        <label for="background-color">Color 3: </label>
        <div class="colors">
          <input type="color" name="darkblue" id="darkblue" value="#30336b" />
          <input
            type="color"
            name="lightgreen"
            id="lightgreen"
            value="#55efc4"
          />
          <input type="color" name="orange" id="orange" value="#e17055" />
          <input type="color" name="corail" id="corail" value="#d63031" />
          <input type="color" name="blue" id="blue" value="#0984e3" />
        </div>
      </div>
    </div>
    <button class="save-changes" @click="updateName">Save Changes</button>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
import { updateClientById, getClientById } from "../../modules/clients"
export default {
  components: {
    InlineSvg,
  },
  data() {
    return {
      btns: [
        {
          id: 1,
          name: "General",
          icon: require("../../assets/images/mobygeek_settings.svg"),
        },
        {
          id: 2,
          name: "Formes",
          icon: require("../../assets/images/mobygeek_forme.svg"),
        },
        {
          id: 3,
          name: "Matériaux",
          icon: require("../../assets/images/mobygeek_mat.svg"),
        },
        {
          id: 4,
          name: "Dimensions",
          icon: require("../../assets/images/mobygeek_dim.svg"),
        },
        {
          id: 5,
          name: "Piètements",
          icon: require("../../assets/images/mobygeek_piet.svg"),
        },
        {
          id: 6,
          name: "Passe Câbles",
          icon: require("../../assets/images/mobygeek_pass.svg"),
        },
        {
          id: 7,
          name: "Goulotte",
          icon: require("../../assets/images/mobygeek_goulotte.svg"),
        },
        {
          id: 8,
          name: "Support Ecrans",
          icon: require("../../assets/images/mobygeek_support.svg"),
        },
      ],
      activeBtn: "General",
      idClient: "611f78229a3d86c9dab15d8b",
      datas: {
        $set: {
          name: ""
        }
      }
    };
  },
  mounted () {
      getClientById(this.idClient)
        .then(res => {
          this.datas.$set.name = res.data.name
        });
    
  },
  methods: {
    changeInputs(elem) {
      this.activeBtn = elem;
    },
    updateName () {
      updateClientById(this.idClient, this.datas).then(res => console.log(res));
      console.log(this.datas);
    }
  },
};
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
    transition: 0.3s;

    &:hover,
    &:focus {
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
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
}

.img {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  height: 34px;

  .img_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    background-color: #26ce83;
    border-radius: 5px 0 0 5px;
  }

  input[type="file"] {
    width: 60%;
    height: 100%;
    margin: 0;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "Upload your image";
      width: 90%;
      height: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #b3c1d0;
      border-radius: 3px;
      padding: 5px 8px;
      margin: 0;
      outline: none;
      white-space: nowrap;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
      color: #b3c1d0;
    }
  }

  input[type="text"] {
    width: 25%;
    height: 100%;
    cursor: text;
    margin: 0;
    border: 1px solid #b3c1d0;
    border-radius: 3px;
    padding: 5px 8px;
    color: #767676;
    outline: none;

    &:focus,
    &:hover {
      border-color: #26ce83;
    }

    &:focus::placeholder {
      color: transparent;
    }

    &::placeholder {
      color: #b3c1d0;
    }
  }
}

.img-mat {
  margin-bottom: 0.5rem;
}

.dimensions-container {
  input[type="text"] {
    cursor: text;
    width: 100%;
    height: 27px;
    margin-bottom: 1rem;
    margin-right: 0;
    color: #b3c1d0;
    border: 1px solid #b3c1d0;
    text-align: center;
    outline: none;

    &:focus,
    &:hover {
      border-color: #26ce83;
    }

    &:focus::placeholder {
      color: transparent;
    }

    &::placeholder {
      color: #b3c1d0;
    }
  }
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
