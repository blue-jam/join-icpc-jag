import React from 'react';

class JagForm extends React.Component<{}> {
    render() {
        return (
          <form className="pure-form pure-form-aligned">
            <div className="pure-control-group">
              <label htmlFor="name">
                氏名
              </label>
              <input type="text" id="name"/>
            </div>
            <div className="pure-control-group">
              <label htmlFor="organization">
                所属
              </label>
              <input type="text" id="organization" placeholder="学校名または企業名"/>
            </div>
            <div className="pure-control-group">
              <label htmlFor="handle">ハンドルネーム</label>
              <input type="text" id="handle"/>
            </div>
            <div>
              <div className="pure-control-group">
                <label htmlFor="icpc-year">ICPCに参加した年</label>
                <input type="text" id="icpc-year"/>
              </div>
              <div className="pure-control-group">
                <label htmlFor="icpc-school">ICPC参加時の所属</label>
                <input type="text" id="icpc-school"/>
              </div>
              <div className="pure-control-group">
                <label htmlFor="icpc-team">チーム名</label>
                <input type="text" id="icpc-team"/>
              </div>
            </div>
            <fieldset className="pure-controls">
              <legend>JAGに入ってやりたいこと</legend>
              <label className="pure-checkbox">
                <input type="checkbox"/>
                問題作成
              </label>
              <label className="pure-checkbox">
                <input type="checkbox"/>
                現地スタッフ
              </label>
              <label className="pure-checkbox">
                <input type="checkbox"/>
                事務
              </label>
            </fieldset>
          </form>
        );
    }
}

export default JagForm;
