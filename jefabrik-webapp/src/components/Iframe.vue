<template>
    <div id="iframe">
        <iframe 
            id="v3d_iframe" 
            class="v3d-iframe" 
            :src="urlConfig" 
            width="100%" 
            height="400px" 
            data-hj-allow-iframe>
		</iframe>
    </div>
</template>
<script>
export default {
    props: ['urlConfig']
}
</script>