<template>
	<div id="footer">
		<div class="footer_inner">
			<div class="footer_inner2">
                <strong>세림스틸로고(예정)</strong>
            </div>
            <div class="footer_inner3">
                경기도 시흥시 정왕동 2210 B동 1234호
                TEL. 031-499-4668
                FAX. 031-8041-4660
                EMAIL. slsteelceo@naver.com
            </div>
		</div>
	</div>	
</template>

<script>

export default {
  name: 'Footer',

}
</script>
<style scoped>
#footer{
    width: 70%;
    height: 80px;
    margin-left: 15%;
position:relative;
bottom:0;
display: block;
	background: #eee;
    
}

.footer_inner{
	width: 100%;
	margin: 0 auto;
}

.footer_inner2 {
    width: 150px;
    height: 80px;
    background: pink;
    float: left;
    box-sizing:border-box;
    margin-left: 0%;
}

.footer_inner3 {
    padding-top: 30px;
    padding-left: 10px;
	background: #eee;
	float: left;
    margin-left: auto;
    box-sizing: border-box;
    font-size: 12px;
    
}
</style>