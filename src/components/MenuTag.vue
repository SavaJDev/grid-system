<template>
           <div class="btn"
                :class="{btnNotActive: notActive}" 
                :style="isActive"
                @click="btnPressed(id)">
                    <p>{{ title }}</p>
           </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            title: {
                type: String,
                default: "Press Button"
            },
            isActive: {
                type: Object,
                default: () => {
                   return {backgroundColor: '#d5e07e'}
                }
            },
            id: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
               notActive: false 
            }
        },
        methods: {
            btnPressed(id) {
                this.$emit('btnPressed',id);
                this.notActive = !this.notActive;
            }
        }
    }

</script>


<style scoped>
    
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 17px;
        border-radius: 3px;
        cursor: pointer;
        margin-right: 15px;
        margin-top: 12px;
        margin-bottom: 13px;
        padding: 0;
    }

    .btn p {
        margin: 2px 5px;
        font-family: Montserrat;
        font-size: 10px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1px;
        color: #ffffff;
    }
    
    .btnNotActive {
        opacity: .5;
    }

</style>
