<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="用户位置坐标" style="font-weight: bold">
                <el-table
                  :data="form.userPos"
                  border
                  style="width:100%;"
                  max-height="20vh">
                  <el-table-column align="center" type="index" label="序号"></el-table-column>
                  <el-table-column align="center" label="位置坐标">
                    <template slot-scope="scope">
                      {{ scope.row.pos }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot="header">
                      <el-button type="primary" size="mini" @click="goAddRow(1)">新增</el-button>
                    </template>
                    <template slot-scope="scope">
                      <el-button @click="handleDelete(scope.$index,1)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="基站位置坐标" style="font-weight: bold">
                <el-table
                  :data="form.BSPos"
                  border
                  style="width:100%;"
                  max-height="20vh">
                  <el-table-column align="center" type="index" label="序号"></el-table-column>
                  <el-table-column align="center" label="位置坐标">
                    <template slot-scope="scope">
                      {{ scope.row.pos }}
                    </template>
                  </el-table-column>
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
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="信道模型相关参数" style="font-weight: bold"></el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="nb_tx">
                <el-input v-model="form.input.nb_tx"></el-input>
              </el-form-item>
              <el-form-item label="nb_rx">
                <el-input v-model="form.input.nb_rx"></el-input>
              </el-form-item>
              <el-form-item label="nb_taps">
                <el-input v-model="form.input.nb_taps"></el-input>
              </el-form-item>
              <el-form-item label="channel_bandwidth">
                <el-input v-model="form.input.channel_bandwidth"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="nb_tx">
                <el-input v-model="form.input.nb_tx"></el-input>
              </el-form-item>
              <el-form-item label="nb_rx">
                <el-input v-model="form.input.nb_rx"></el-input>
              </el-form-item>
              <el-form-item label="nb_taps">
                <el-input v-model="form.input.nb_taps"></el-input>
              </el-form-item>
              <el-form-item label="channel_bandwidth">
                <el-input v-model="form.input.channel_bandwidth"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="nb_tx">
                <el-input v-model="form.input.nb_tx"></el-input>
              </el-form-item>
              <el-form-item label="nb_rx">
                <el-input v-model="form.input.nb_rx"></el-input>
              </el-form-item>
              <el-form-item label="nb_taps">
                <el-input v-model="form.input.nb_taps"></el-input>
              </el-form-item>
              <el-form-item label="channel_bandwidth">
                <el-input v-model="form.input.channel_bandwidth"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="nb_tx">
                <el-input v-model="form.input.nb_tx"></el-input>
              </el-form-item>
              <el-form-item label="nb_rx">
                <el-input v-model="form.input.nb_rx"></el-input>
              </el-form-item>
              <el-form-item label="nb_taps">
                <el-input v-model="form.input.nb_taps"></el-input>
              </el-form-item>
              <el-form-item label="channel_bandwidth">
                <el-input v-model="form.input.channel_bandwidth"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form" size="mini" label-width="150px">
              <el-form-item label="仿真时间" style="font-weight: bold">
                <el-input v-model="form.input.nb_tx" style="width: 300px"><i slot="suffix">帧（每帧10ms）</i></el-input>
              </el-form-item>
              <el-form-item label="小区个数" style="font-weight: bold">
                <el-input v-model="form.input.nb_tx" style="width: 300px"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset">重置</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="reset">保存</el-button>
    </div>
    <el-dialog
      :title="'新增'+dialogTitle+'位置坐标'"
      :visible.sync="dialogVisible"
      :modal-append-to-body='false'
      width="30%">
      <el-form :model="newRow" size="mini" label-width="100px">
        <el-form-item label="x坐标"><el-input v-model="newRow.x" type="number" style="width: 100px"></el-input></el-form-item>
        <el-form-item label="y坐标"><el-input v-model="newRow.y" type="number" style="width: 100px"></el-input></el-form-item>
        <el-form-item label="z坐标"><el-input v-model="newRow.z" type="number" style="width: 100px"></el-input></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRow">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        active: 0,
        dialogTitle: '',
        dialogVisible: false,
        newRow: {x:'',y:'',z:''},
        form: {
          method: '',
          userPos: [
            { pos: [15,0,0] },
            { pos: [15,10,0] },
            { pos: [15,0,10] },
            { pos: [15,0,20] },
          ],
          BSPos: [
            { pos: [20,0,0] },
            { pos: [20,10,0] },
            { pos: [20,0,10] },
            { pos: [20,0,20] },
          ],
          files: [
            'AWGN',
            'Rice1',
            'Rayleigh1',
            'SCM_A',
            'EPA',
            'EVA',
            'ETU',
            'TDL_A',
            'MBSFN',
          ],
          selectFile: '',
          input: {
            nb_tx: '',
            nb_rx: '',
            nb_taps: '',
            channel_bandwidth: '',
            sampling_rate: '',
            max_Doppler: '',
            amps: '',
            delays: '',
            Td: '',
            aoa: '',
            ricean_factor: '',
            path_loss_dB: '',
          },
          fileName: '',
          fileList: []
        },
      }
    },
    mounted() {
      this.loading = false;
    },
    methods:{
      reset() {
        this.form = {
          files: [
            'AWGN',
            'Rice1',
            'Rayleigh1',
            'SCM_A',
            'EPA',
            'EVA',
            'ETU',
            'TDL_A',
            'MBSFN',
          ],
          selectFile: '',
          input: {
            nb_tx: '',
            nb_rx: '',
            nb_taps: '',
            channel_bandwidth: '',
            sampling_rate: '',
            max_Doppler: '',
            amps: '',
            delays: '',
            Td: '',
            aoa: '',
            ricean_factor: '',
            path_loss_dB: '',
          },
          fileName: '',
          fileList: []
        } 
      },
      goAddRow(index) {
        this.newRow = {x:'',y:'',z:''};
        this.dialogTitle = index==1?"用户":"基站";
        this.dialogVisible = true;
      },
      addRow() {
        if(this.dialogTitle=='用户') {
          this.form.userPos.push({pos: [parseInt(this.newRow.x),parseInt(this.newRow.y),parseInt(this.newRow.z)]})
        } else {
          this.form.BSPos.push({pos: [parseInt(this.newRow.x),parseInt(this.newRow.y),parseInt(this.newRow.z)]})
        }
        this.dialogVisible = false;
        this.$message({
          message: this.dialogTitle+'位置坐标添加成功',
          type: 'success'
        });
      },
      handleDelete(index1,index2) {
        if(index2==1) {
          this.form.userPos.splice(index1,1)
        } else {
          this.form.BSPos.splice(index1,1)
        }
        this.$message({
          message: (index2==1?'用户':'基站') + '位置坐标删除成功',
          type: 'success'
        });
      }
    }
  }

</script>

<style>

  .el-table .el-table__cell {
    padding: 0;
  }
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
  }
  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
  }
</style>
<style scoped>
  .container {
    padding: 20px 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container .header {
    height: 80px;
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
</style>
