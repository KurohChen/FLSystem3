<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page" id="page1" v-show="active==2">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form3" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="1. 业务参数调整" style="font-weight: bolder">
              </el-form-item>
              <el-form-item label="调整对象为用户">
                <el-row :gutter="24">
                  <el-col :span="4"><el-input v-model="form1.userNum"></el-input></el-col>
                  <el-col :span="8"><el-button type="primary">确认</el-button></el-col>
                </el-row>
              </el-form-item>
              <el-form-item  label-width="0px" v-show="form1.userNum!=''&&form1.userNum!=0">
                <el-table
                  :data="form3.tableData"
                  border
                  style="width:100%;"
                  height="160px"
                  max-height="300px">
                  <el-table-column align="center" type="index" label="序号"></el-table-column>
                  <el-table-column align="center" label="DataRate" prop="DataRate"></el-table-column>
                  <el-table-column align="center" label="PacketSize" prop="PacketSize"></el-table-column>
                  <el-table-column align="center" label="HostDevice" prop="HostDevice"></el-table-column>
                  <el-table-column align="center" label="RNTI" prop="RNTI"></el-table-column>
                  <el-table-column align="center" label="LCID" prop="LCID"></el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                      <el-button @click="showDialog(scope.row.name,3)" size="mini">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
              <el-form-item label="2. 物理层信道噪声系数" style="font-weight: bold" label-width="250px"></el-form-item>
              <el-row :gutter="24">
                <el-col :span="6">                
                  <el-form-item label="GNB NoiseFigure"><el-input v-model="form1.userNum"></el-input></el-form-item>
                </el-col>
                <el-col :span="6">                
                  <el-form-item label="UE NoiseFigure"><el-input v-model="form1.userNum"></el-input></el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="3. 物理层调制" style="font-weight: bold" label-width="150px">
              </el-form-item>
              <el-form-item label-width="0px">
                <el-select v-model="form1.select" placeholder="请选择">
                  <el-option
                    v-for="item in selectList"
                    :key="item.index"
                    :label="item.name"
                    :value="item.index">
                  </el-option>
                </el-select>
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
        active: 2,
        formComplete: true,
        form1: {
          method: '0',
          userNum: '',
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
          select: '',
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
        selectList: [
          {index:0,name:'256QAM MCS表'},
          {index:1,name:'64QAM MCS表'},
          {index:2,name:'高可靠性64QAM MCS表'}
        ],
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
