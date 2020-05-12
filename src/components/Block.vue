<template>
    <div class="block"
         :class="{blockNotActive: active,
                  fillBlock: fillActive}"
         :style="[blockSize,fillStyle]">
        <div class="nameTag"
             :class="{fillBlock_nameTag: fillActive}">
            <app-tag :title="tagTitle.title"
                     :isActive="tagTitle.style"/>
        </div> 
    </div>
</template>

<script>
    import AppTag from '../components/MenuTag'
    
    import {mapGetters} from 'vuex'
    
    export default {
        name: 'Block',
        components: {
            AppTag
        },
        props: {
           id: {
                type: Number,
                default: 0
           }, 
           nameTag: {
                type: String,
                default: " "
           },    
           blockSize: {
               type: Object,
               default: () => {
                   return {gridColumn: 'span 1',
                           gridRow: 'span 1'
                          }
                }
           },
           fillActive: {
               type: Boolean,
               default: false 
           }    
        },
        data () {
            return {
               active: false
            }
        },
        methods: {
            
        },
        computed: {
            ...mapGetters({
                tags: 'menu/menuTags'
            }),
            tagTitle() {
              let res = this.tags.find(item => item.id == this.id) 
                return res
            },
            fillStyle() {
                if(this.fillActive) return this.tagTitle.style
            }
        }
    }

</script>


<style scoped>
    .block {
        display: flex;
        background-color: #ffffff;
        margin-right: 20px;
        border-radius: 4px;
        margin-bottom: 20px;
        border: .5px solid grey; 
    }
    
    .blockNotActive {
        display: none;
    }
    
    .nameTag {
        margin-left: 22px;
        margin-top: 23px;
    }
    
    .fillBlock {
        justify-content: center;
    }
    
    .fillBlock_nameTag {
        margin-left: 0;
    }
    
</style>
