<template>
    <div id="app"> 
              <div class="tags-container">
                  <app-tag v-for="(tag,i) in tags"
                           :key="i" 
                           :title="tag.title" 
                           :isActive="tag.style"
                           :id="tag.id"
                           @btnPressed="btnClick" 
                   /> 
              </div>
              
              <div class="blocks-container">  
                 <app-block v-for="(block,i) in blocks" 
                            :id="block.id"
                            :key="i"
                            :blockSize="block.style"
                            :fillActive="block.fill"
                            ref="block"/> 
              </div>
    </div>
</template>

<script>
    import AppTag from './components/MenuTag'
    import AppBlock from './components/Block'

    import {mapGetters} from 'vuex'

    export default {
        name: 'App',
        components: {
            AppTag,
            AppBlock
        },
        data () {
            return {
               
            }
        },
        computed: {
            ...mapGetters({
                tags: 'menu/menuTags',
                blocks: 'blocks/allBlocks'
            })
        },
        methods: {
            btnClick(e) {
                let el = this.$refs.block
                
                el.forEach(function(item,i) {
                   if(el[i].id == e){
                       el[i].active = !el[i].active
                   }
                })
            }
        }
    }

</script>

<style>
    #app {
        width: 1200px;
        height: 992px;
        background-color: #eeeeee;
    }
    
    .tags-container {
        margin-left: 110px;
    }
    
    .blocks-container {
        margin-left: 110px;
        margin-right: 90px;
        //height: 940px;
        max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-auto-rows: 320px;
        grid-auto-flow: dense;
    }
    
</style>
