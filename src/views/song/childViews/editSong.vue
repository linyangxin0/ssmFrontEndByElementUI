<template>
  <div class="edit-content">
    <table class="edit-table">

      <tr>
        <td ><span>ID：</span></td>
        <td>
          <el-input v-model="editId" clearable disabled class="edit-input"></el-input>
        </td>
      </tr>

      <tr>
        <td ><span>歌曲名称：</span></td>
        <td>
          <el-input class="edit-input" placeholder="请输入歌曲名称" v-model="editName" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td><span>歌曲描述：</span></td>
        <td>
          <el-input class="edit-input" placeholder="请输入歌曲描述" v-model="editInfo" clearable ></el-input>

        </td>
      </tr>

      <tr>
        <td><span>作者：</span></td>
        <td>
          <el-input class="edit-input" placeholder="请输入作者" v-model="editAuthor" clearable ></el-input>

        </td>
      </tr>

      <tr>
        <td><span>请选择日期：</span></td>
        <td>
          <el-date-picker v-model="editUpdateTime" type="date" placeholder="选择日期" class="edit-input"></el-date-picker>

        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>

          <el-select v-model="editStatus" placeholder="请选择" class="edit-input">
            <el-option value=0 label="设计中" :key="0"></el-option>
            <el-option value=1 label="发布" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <el-button type="success" @click="clickEditSong">确定</el-button>
        </td>
        <td class="btn-center">
          <el-button type="info" @click="backClick">取消</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {findSongById,editSong} from "../../../network/song";
  import {formatDate} from "../../../common/utils";


  export default {
    name: "editSong",
    data(){
      return{
        editId:0,
        editName:'',
        editInfo:'',
        editAuthor:'',
        editUpdateTime:Date,
        editStatus:'0'
      }
    },
    props:{
      song:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      clickEditSong(){
        editSong(this.editId,this.editName,this.editInfo,this.editAuthor,this.editUpdateTime,this.editStatus).then(res=>{
          alert('编辑成功')
          this.$router.back()
        })
      },
      backClick(){
        this.$router.back()
      }
    },
    created() {
      this.editId=this.$route.params.id
      findSongById(this.editId).then(res=>{
        //进入界面时，填入信息
        this.editName=res.name
        this.editInfo=res.info
        this.editAuthor=res.author
        this.editUpdateTime=res.updateTime
        //转为字符串，为了select可以自动选择
        this.editStatus=res.status+''

        console.log(typeof (this.editStatus))

        //时间戳转换为日期
        this.editUpdateTime = formatDate(new Date(this.editUpdateTime), 'yyyy-MM-dd')
      })
    }
  }
</script>

<style scoped>
  .edit-content{
    width: 600px;
    height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  .edit-table{
    width: 600px;
    height: 400px;
  }

  .edit-input{
    margin-left: 20px;
    width: 300px;
    height: 40px;
    /*border-radius: 5px;*/
    /*border: 2px solid #d3d3d3;*/
  }

  .btn-center{
    text-align: center;
  }

  .edit-btn{
    width: 80px;
    height: 40px;

    border-radius: 2px;
    border: none;
    background-color: #d3d3d3;
  }
</style>
