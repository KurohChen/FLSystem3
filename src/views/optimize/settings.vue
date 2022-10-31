<template>
  <div class="container" v-loading="loading">
    <div class="header">
      <el-button style="margin-top: 5px;" :type="active==0?'primary':''" @click="changeActive(0)">逻辑信道配置</el-button>
      <el-button style="margin-top: 5px;" :type="active==1?'primary':''" @click="changeActive(1)">应用流量配置</el-button>
      <el-button style="margin-top: 5px;" :type="active==2?'primary':''" @click="changeActive(2)">控制参数配置</el-button>
    </div>
    <div class="content">
      <div class="page" id="page1" v-show="active==0">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="配置方式" style="font-weight: bold">
                <el-radio v-model="form1.method" label="0">自定义配置</el-radio>
                <el-radio v-model="form1.method" label="1">导入配置文件</el-radio>
              </el-form-item>
              <el-form-item label="自定义配置" style="font-weight: bold" v-show="form1.method==0"></el-form-item>
              <el-form-item  label-width="0px"  v-show="form1.method==0">
                <el-table
                  :data="form1.tableData"
                  border
                  style="width:100%;"
                  max-height="300px">
                  <el-table-column align="center" type="index" label="序号"></el-table-column>
                  <el-table-column align="center" label="RNTI" prop="RNTI"></el-table-column>
                  <el-table-column align="center" label="LogicalChannelID" prop="LogicalChannelID"></el-table-column>
                  <el-table-column align="center" label="LCGID" prop="LCGID"></el-table-column>
                  <el-table-column align="center" label="SeqNumFieldLength" prop="SeqNumFieldLength"></el-table-column>
                  <el-table-column align="center" label="MaxTxBufferSDUs" prop="MaxTxBufferSDUs"></el-table-column>
                  <el-table-column align="center" label="ReassemblyTimer" prop="ReassemblyTimer"></el-table-column>
                  <el-table-column align="center" label="EntityType" prop="EntityType"></el-table-column>
                  <el-table-column align="center" label="Priority" prop="Priority"></el-table-column>
                  <el-table-column align="center" label="PBR" prop="PBR"></el-table-column>
                  <el-table-column align="center" label="BSD" prop="BSD"></el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot="header">
                      <el-button type="primary" size="mini" @click="goAddRow(2)">新增</el-button>
                    </template>
                    <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.$index,2)" type="danger" size="mini">删除</el-button>
                  </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
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
      <div class="page" id="page2" v-show="active==1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form2" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="配置方式" style="font-weight: bold">
                <el-radio v-model="form2.method" label="0">自定义配置</el-radio>
                <el-radio v-model="form2.method" label="1">导入配置文件</el-radio>
              </el-form-item>
              <el-form-item label="自定义配置" style="font-weight: bold" v-show="form2.method==0"></el-form-item>
              <el-form-item  label-width="0px"  v-show="form2.method==0">
                <el-table
                  :data="form2.tableData"
                  border
                  style="width:100%;"
                  max-height="300px">
                  <el-table-column align="center" type="index" label="序号"></el-table-column>
                  <el-table-column align="center" label="DataRate" prop="DataRate"></el-table-column>
                  <el-table-column align="center" label="PacketSize" prop="PacketSize"></el-table-column>
                  <el-table-column align="center" label="HostDevice" prop="HostDevice"></el-table-column>
                  <el-table-column align="center" label="RNTI" prop="RNTI"></el-table-column>
                  <el-table-column align="center" label="LCID" prop="LCID"></el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot="header">
                      <el-button type="primary" size="mini" @click="goAddRow(2)">新增</el-button>
                    </template>
                    <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.$index,2)" type="danger" size="mini">删除</el-button>
                  </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
              <el-form-item label="导入配置文件" style="font-weight: bold" v-show="form2.method==1">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/"
                  :file-list="form2.fileList"
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
      <div class="page" id="page3" v-show="active==2">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form3" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="调度类型" style="font-weight: bold">
                <el-radio v-model="form3.type1" label="0">0（基于时隙的调度）</el-radio>
                <el-radio v-model="form3.type1" label="1">1（基于符号的调度）</el-radio>
              </el-form-item>
              <el-form-item label="复用类型" style="font-weight: bold">
                <el-radio v-model="form3.type2" label="0">0（FDD）</el-radio>
                <el-radio v-model="form3.type2" label="1">1（TDD）</el-radio>
              </el-form-item>
              <el-form-item label="子载波间隔" style="font-weight: bold">
                <el-radio v-model="form3.interval" label="15">15 kHz</el-radio>
                <el-radio v-model="form3.interval" label="30">30 kHz</el-radio>
                <el-radio v-model="form3.interval" label="60">60 kHz</el-radio>
                <el-radio v-model="form3.interval" label="120">120 kHz</el-radio>
              </el-form-item>
              <el-form-item label="上下行载频" style="font-weight: bold">
                <el-row :gutter="24">
                  <el-col :span="6"><el-input v-model="form3.carrier[0]"><i slot="append">GHz</i><i slot="prepend">上行</i></el-input></el-col>
                  <el-col :span="6"><el-input v-model="form3.carrier[1]"><i slot="append">GHz</i><i slot="prepend">下行</i></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="上下行信道带宽" style="font-weight: bold">
                <el-row :gutter="24">
                  <el-col :span="6"><el-input v-model="form3.bandwidth[0]"><i slot="append">MHz</i><i slot="prepend">上行</i></el-input></el-col>
                  <el-col :span="6"><el-input v-model="form3.bandwidth[1]"><i slot="append">MHz</i><i slot="prepend">下行</i></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="发射功率" style="font-weight: bold">
                <el-row :gutter="24">
                  <el-col :span="6"><el-input v-model="form3.power[0]"><i slot="append">dBm</i><i slot="prepend">GNB</i></el-input></el-col>
                  <el-col :span="6"><el-input v-model="form3.power[1]"><i slot="append">dBm</i><i slot="prepend">UE</i></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="基站侧天线增益" style="font-weight: bold">
                <el-row :gutter="24">
                  <el-col :span="6"><el-input v-model="form3.gain"><i slot="append">dBm</i></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="SINR到CQI的映射" style="font-weight: bold">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/"
                  :file-list="form3.fileList"
                  :auto-upload="false"
                  :limit=1
                  :multiple='false'>
                  <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label="上下行最大RB数" style="font-weight: bold">
                <el-row :gutter="24">
                  <el-col :span="8"><el-input v-model="form3.maxRB"></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="CSI报告子带大小" style="font-weight: bold">
                <el-row :gutter="24">
                  <el-col :span="8"><el-input v-model="form3.CSISize"></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="用户移动速度(m/s)" style="font-weight: bold">                
                <el-radio v-model="form3.speed" label="5">5</el-radio>
                <el-radio v-model="form3.speed" label="10">10</el-radio>
                <el-radio v-model="form3.speed" label="15">15</el-radio>
                <el-radio v-model="form3.speed" label="20">20</el-radio>
                <el-radio v-model="form3.speed" label="25">25</el-radio>
              </el-form-item>
              <el-form-item label="上下行子帧配置" style="font-weight: bold"></el-form-item>
              <el-form-item  label-width="0px">
                <el-table
                  :data="form3.tableData"
                  border
                  style="width:100%;"
                  max-height="160px">
                  <el-table-column label="复用类型" align="center">
                    <template slot-scope="scope">
                      <el-radio :label="scope.row.name" v-model="form3.selectName" @change="form3.selectName=scope.row.name"></el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="DLULPeriodicity" prop="DLULPeriodicity"></el-table-column>
                  <el-table-column align="center" label="NumDLSlots" prop="NumDLSlots"></el-table-column>
                  <el-table-column align="center" label="NumDLSyms" prop="NumDLSyms"></el-table-column>
                  <el-table-column align="center" label="NumULSyms" prop="NumULSyms"></el-table-column>
                  <el-table-column align="center" label="NumULSlots" prop="NumULSlots"></el-table-column>
                  <el-table-column align="center" label="TTIGranularity" prop="TTIGranularity"></el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                      <el-button @click="showDialog(scope.row.name,3)" size="mini">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :modal='false'>
      <el-form :model="dialogForm" size="mini">
        <el-row :gutter="24">
          <el-col :span="6"><el-form-item label="复用类型"><el-input v-model="dialogForm.name" disabled></el-input></el-form-item></el-col>
          <el-col :span="6"><el-form-item label="DLULPeriodicity"><el-input :disabled='dialogForm.name=="FDD"' v-model="dialogForm.DLULPeriodicity"></el-input></el-form-item></el-col>
          <el-col :span="6"><el-form-item label="NumDLSlots"><el-input :disabled='dialogForm.name=="FDD"' v-model="dialogForm.NumDLSlots"></el-input></el-form-item></el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6"><el-form-item label="NumULSyms"><el-input :disabled='dialogForm.name=="FDD"' v-model="dialogForm.NumULSyms"></el-input></el-form-item></el-col>
          <el-col :span="6"><el-form-item label="NumULSlots"><el-input :disabled='dialogForm.name=="FDD"' v-model="dialogForm.NumULSlots"></el-input></el-form-item></el-col>
          <el-col :span="6"><el-form-item label="NumDLSyms"><el-input :disabled='dialogForm.name=="FDD"' v-model="dialogForm.NumDLSyms"></el-input></el-form-item></el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="TTIGranularity">
              <el-radio v-model="dialogForm.TTIGranularity" label="2"></el-radio>
              <el-radio v-model="dialogForm.TTIGranularity" label="4"></el-radio>
              <el-radio v-model="dialogForm.TTIGranularity" label="7"></el-radio>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit(dialogForm.name)">确 定</el-button>
      </div>
    </el-dialog>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset">重置</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="save" v-if="!formComplete">保存</el-button>
      <el-button style="margin-top: 5px;" type="info" disabled v-else>已保存</el-button>
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
        active: 0,
        formComplete: true,
        form1: {
          method: '0',
          tableData: [
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
            {'RNTI':1,'LogicalChannelID':4,'LCGID':1,'SeqNumFieldLength':6,'MaxTxBufferSDUs':2,'ReassemblyTimer':5,'EntityType':2,'Priority':1,'PBR':8,'BSD':10},
          ],
          fileList: [],
          input1: {
            username: '',
            password: '',
            ipaddress: '',
            port: ''
          },
          input2: {
            username: '',
            password: '',
            ipaddress: '',
            port: ''
          },
        },
        form2: {
          method: '0',
          tableData: [
            {'DataRate':8000,'PacketSize':6400,'HostDevice':0,'RNTI':1,'LCID':4},
            {'DataRate':8000,'PacketSize':6400,'HostDevice':0,'RNTI':1,'LCID':4},
            {'DataRate':8000,'PacketSize':6400,'HostDevice':0,'RNTI':1,'LCID':4},
            {'DataRate':8000,'PacketSize':6400,'HostDevice':0,'RNTI':1,'LCID':4},
            {'DataRate':8000,'PacketSize':6400,'HostDevice':0,'RNTI':1,'LCID':4},
            {'DataRate':8000,'PacketSize':6400,'HostDevice':0,'RNTI':1,'LCID':4},
          ],
          fileList: [],
        },
        form3: {
          type1: '0',
          type2: '0',
          interval: '15',
          carrier: [2.515,2.635],
          bandwidth: [30,30],
          power: [24,23],
          gain: 5,
          fileList: [],
          maxRB: 160,
          CSISize: 16,
          speed: 5,
          selected: true,
          selectName: 'FDD',
          tableData: [
            {'name':'FDD','DLULPeriodicity':'-','NumDLSlots':'-','NumDLSyms':'-','NumULSyms':'-','NumULSlots':'-','TTIGranularity':'4'},
            {'name':'TDD','DLULPeriodicity':'5','NumDLSlots':'2','NumDLSyms':'8','NumULSyms':'4','NumULSlots':'2','TTIGranularity':'4'},
          ],
        },
        dialogForm: {
          'name':'FDD','DLULPeriodicity':'-','NumDLSlots':'-',
          'NumDLSyms':'-','NumULSyms':'-','NumULSlots':'-',
          'TTIGranularity':'4'
        },
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
      change (row) {
        this.radioId = row.id
        this.selected = row
      },
      showDialog(index1, index2) {
        if(index2==3) {
          // this.form3.tableData[index1]
        }
      },
      showDialog(name, index) {
        if(index==3) {
          this.dialogTitle = '复用类型-'+name+'-编辑';
          this.dialogForm = JSON.parse(JSON.stringify(this.form3.tableData[name=='FDD'?0:1]));
          this.dialogFormVisible = true;
        }
      },
      submitEdit(name) {
        if(name=='FDD' || name=='TDD') {
          this.$set(this.form3.tableData[name=='FDD'?0:1], 'DLULPeriodicity', this.dialogForm.DLULPeriodicity);
          this.$set(this.form3.tableData[name=='FDD'?0:1], 'NumDLSlots', this.dialogForm.NumDLSlots);
          this.$set(this.form3.tableData[name=='FDD'?0:1], 'NumDLSyms', this.dialogForm.NumDLSyms);
          this.$set(this.form3.tableData[name=='FDD'?0:1], 'NumULSyms', this.dialogForm.NumULSyms);
          this.$set(this.form3.tableData[name=='FDD'?0:1], 'NumULSlots', this.dialogForm.NumULSlots);
          this.$set(this.form3.tableData[name=='FDD'?0:1], 'TTIGranularity', this.dialogForm.TTIGranularity);
        }
        this.dialogFormVisible = false;
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
