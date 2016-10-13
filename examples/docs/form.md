<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        var age = parseInt(value, 10);

        setTimeout(() => {
          if (!Number.isInteger(age)) {
            callback(new Error('请输入数字值'));
          } else{
            if (age < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          } 
        }, 1000);
      };
      var validaePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validaePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formInline: {
          user: '',
          region: ''
        },
        formStacked: {
          name: '',
          region: '',
          type: '',
          remark: ''
        },
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        },
        formAlignLeft: {
          name: '',
          region: '',
          type: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        formLabelWidth: '80px',
        options: [
        ],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validaePass2 }
          ],
          age: [
            { required: true, message: '请填写年龄', trigger: 'blur' },
            { validator: checkAge, trigger: 'change' }
          ]
        },
        dynamicForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        },
        dynamicRule: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            alert('申请已提交');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit3(ev) {
        this.$refs.dynamicForm.validate(valid => {
          if (valid) {
            alert('申请已提交');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleValidate(prop, errorMsg) {
        console.log(prop, errorMsg);
      },
      onSubmit() {
        console.log('submit!');
      },
      onRuleFormSubmit() {
        console.log('onRuleFormSubmit');
      },
      removeDomain(item) {
        var index = this.dynamicForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicForm.domains.push({
          key: this.dynamicForm.domains.length,
          value: ''
        });
      }
    }
  }
</script>

<style>
  .demo-form {
    .el-select .el-input {
      width: 360px;
    }
    .el-form {
      width: 440px;
    }

    .line {
      text-align: center;
    }

    .el-checkbox-group {
      width: 320px;
      margin: 0;
      padding: 0;
      list-style: none;

      &:after,&:before {
        content: ' ';
        display: table;
      }
      &:after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
      }

      .el-checkbox {
        float: left;
        width: 160px;
        padding-right: 20px;
        margin: 0;
        padding: 0;

        + .el-checkbox {
          margin-left: 0;
        }
      }
    }
    .demo-form-normal {
      width: 440px;
    }
    .demo-form-inline {
      .el-input {
        width: 150px;
      }
      > * {
        margin-right: 10px;
      }
    }
    .demo-form-stacked {
      width: 270px;

      .el-select .el-input {
        width: 100%;
      }
    }
    .demo-ruleForm {
      width: 460px;

      .el-input,
      .el-textarea {
        width: auto;
      }
      
      .el-select .el-input {
        width: 360px;
      }
    }
    .demo-dynamic {
      .el-input {
        display: inline-block;
        margin-right: 10px;
        width: 270px;
      }
    }
    .fr {
      float: right;
    }
  }
</style>

## Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据


