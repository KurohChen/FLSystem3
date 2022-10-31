<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page" id="page1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="调度策略选择" style="font-weight: bold">
                <el-radio v-model="form1.method" label="0">自定义信道参数设定</el-radio>
                <el-radio v-model="form1.method" label="1">导入链路级子系统生成的信道配置文件</el-radio>
              </el-form-item>
              <el-row :gutter="24" v-show="form1.method==0">
                <el-col :span="12">
                  <el-form-item label="大尺度衰落" style="font-weight: bold">
                    <el-radio v-model="form1.bigone" label="0">Alpha-beta-gamma（ABG）模型</el-radio>
                    <el-radio v-model="form1.bigone" label="1">Close-in free space（CI）模型</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :span="12">  
                  <el-form-item label="选择场景">
                    <el-select v-model="form1.select1" placeholder="请选择">
                      <el-option
                        v-for="item in selectList[form1.bigone=='0'?0:1]"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="24" v-show="form1.method==0">
                <el-col :span="12">
                  <el-form-item label="小尺度衰落" style="font-weight: bold">
                    <el-radio v-model="form1.smallone" label="0">nrTDLChannel抽头延迟线(TDL)模型</el-radio>
                    <el-radio v-model="form1.smallone" label="1">nrCDLChannel集群延迟线(CDL)模型</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :span="12">  
                  <el-form-item label="选择场景">
                    <el-select v-model="form1.select2" placeholder="请选择">
                      <el-option
                        v-for="item in selectList[form1.smallone=='0'?2:3]"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label='DelayProfile' v-show="form1.smallone==1&&form1.select2!=''&&form1.method==0">{{this.form1.select2}}</el-form-item>
              <el-row :gutter="24" v-show="form1.smallone==1&&form1.select2!=''&&form1.method==0">
                <el-col :span="12">
                  <el-form-item label="AngleScaling">
                    <el-input v-model="form1.AngleScaling"></el-input>
                  </el-form-item>
                  <el-form-item label="DelaySpread">
                    <el-input v-model="form1.DelaySpread"></el-input>
                  </el-form-item>
                  <el-form-item label="CarrierFrequency">
                    <el-input v-model="form1.CarrierFrequency"></el-input>
                  </el-form-item>
                  <el-form-item label="MaximumDopplerShift">
                    <el-input v-model="form1.MaximumDopplerShift"></el-input>
                  </el-form-item>
                  <el-form-item label="UTDirectionOfTravel">
                    <el-input v-model="form1.UTDirectionOfTravel"></el-input>
                  </el-form-item>
                  <el-form-item label="SampleRate">
                    <el-input v-model="form1.SampleRate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="TransmitAntennaArray">
                    <el-input v-model="form1.TransmitAntennaArray"></el-input>
                  </el-form-item>
                  <el-form-item label="ReceiveAntennaArray">
                    <el-input v-model="form1.ReceiveAntennaArray"></el-input>
                  </el-form-item>
                  <el-form-item label="Seed">
                    <el-input v-model="form1.Seed"></el-input>
                  </el-form-item>
                  <el-form-item label="ChannelFiltering">
                    <el-input v-model="form1.ChannelFiltering"></el-input>
                  </el-form-item>
                  <el-form-item label="SampleDensity">
                    <el-input v-model="form1.SampleDensity"></el-input>
                  </el-form-item>
                  <el-form-item label="InitialTime">
                    <el-input v-model="form1.InitialTime"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="导入配置文件" style="font-weight: bold" v-show="form1.method==1">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/"
                  :file-list="form1.fileList"
                  :auto-upload="false"
                  :limit=1
                  :multiple='false'>
                  <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
                </el-upload>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :modal='false'>
      <el-form :model="dialogForm" size="mini">
        <el-form-item label="RNTI">
          <el-radio v-model="dialogForm.RNTI" label="1"></el-radio>
          <el-radio v-model="dialogForm.RNTI" label="2"></el-radio>
          <el-radio v-model="dialogForm.RNTI" label="3"></el-radio>
          <el-radio v-model="dialogForm.RNTI" label="4"></el-radio>
        </el-form-item>
        <el-form-item label="ALPHA"><el-input v-model="dialogForm.ALPHA"></el-input></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </div>
    </el-dialog>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset">重置</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="save" v-if="!formComplete">保存</el-button>
      <el-button style="margin-top: 5px;" type="info" disabled v-else>已保存</el-button>
      <el-button style="margin-top: 5px;" type="success">开始仿真</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        dialogFormVisible: false,
        dialogTitle: '',
        active: 2,
        formComplete: true,
        form1: {
          method: '0',
          bigone: '0',
          smallone: '0',
          tableData: [
            {'RNTI':'1','ALPHA':2},
            {'RNTI':'2','ALPHA':9},
            {'RNTI':'3','ALPHA':7},
            {'RNTI':'4','ALPHA':6},
          ],
          fileList: [],
          select1: '',
          select2: '',
        },
        dialogForm: {
          'RNTI': '1',
          'ALPHA': '',
        },
        selectList: [
          ['InH LOS场景'],
          ['InH LOS场景'],
          ['TDL-A','TDL-B', 'TDL-C', 'TDL-D','TDL-E','TDLA30','TDLB100','TDLC300','TDLC60'],
          ['CDL-A','CDL-B','CDL-C','CDL-D','CDL-E']
        ]
      }
    },
    mounted() {
      this.loading = false;
    },
    methods:{
      changeActive(index) {
        if(index!=this.active) this.active = index
      },
      reset() {
      },
      save() {},
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      submit() {

      },
      submitEdit() {
        if(this.dialogForm.RNTI!=''&&this.dialogForm.ALPHA!='') {
          this.form1.tableData.push(
            {'RNTI': this.dialogForm.RNTI, 'ALPHA': parseInt(this.dialogForm.ALPHA)}
          )
          this.dialogFormVisible = false;
          this.$message({
            message: this.dialogTitle+'添加成功',
            type: 'success'
          });
          this.dialogForm = {'RNTI':'','ALPHA':''};
        } else {
          this.$message('请确保信息都填写无误');
        }
      },
      handleDelete(index) {
        this.form1.tableData.splice(index,1)
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container .header {
    height: 60px;
    width: 100%;
  }
  .container .content {
    position: relative;
    width: 100%;
    flex: 1;
  }
  .container .footer {
    height: 60px;
    width: 100%;
  }
  #page3 {
    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
