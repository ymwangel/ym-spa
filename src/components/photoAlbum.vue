<template>
  <div class="photoAlbum">
    <h1>{{ info }}</h1>
    <h2>Essential Links</h2>
    <w-area></w-area>
  </div>
</template>

<script>
  import WArea from "./WArea.vue"
	export default{
		name:'photoAlbum',
		data(){
			return{
				info:"photoAlbum"
			}
		},
    methods:{

    },
    components:{WArea}
	}
</script>

<style scoped>
  .photoAlbum{
    width: 1184px;
    margin: 0 auto;
  }
</style>
