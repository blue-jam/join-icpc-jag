import React, { useState } from 'react';

const JagForm: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleButtonClick = (e: any) => {
    e.preventDefault();

    let newEmailBody = 'ICPC OBOGの会の皆様\n\n';
    newEmailBody += `${organization}に所属している${name}です。\n`;

    setEmailBody(newEmailBody);
  };

  return (
    <div>
      <form className="pure-form pure-form-aligned">
        <div className="pure-control-group">
          <label htmlFor="name">氏名</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="pure-control-group">
          <label htmlFor="organization">所属</label>
          <input
            type="text"
            id="organization"
            placeholder="学校名または企業名"
            value={organization}
            onChange={e => setOrganization(e.target.value)}
          />
        </div>
        <div className="pure-control-group">
          <label htmlFor="handle">ハンドルネーム</label>
          <input type="text" id="handle" />
        </div>
        <div>
          <div className="pure-control-group">
            <label htmlFor="icpc-year">ICPCに参加した年</label>
            <input type="text" id="icpc-year" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="icpc-school">ICPC参加時の所属</label>
            <input type="text" id="icpc-school" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="icpc-team">チーム名</label>
            <input type="text" id="icpc-team" />
          </div>
        </div>
        <fieldset className="pure-controls">
          <legend>JAGに入ってやりたいこと</legend>
          <label className="pure-checkbox">
            <input type="checkbox" />
            問題作成
          </label>
          <label className="pure-checkbox">
            <input type="checkbox" />
            現地スタッフ
          </label>
          <label className="pure-checkbox">
            <input type="checkbox" />
            事務
          </label>
        </fieldset>
        <div className="pure-controls">
          <button
            className="pure-button pure-button-primary"
            onClick={handleButtonClick}
          >
            加入メールを生成
          </button>
        </div>
      </form>
      <hr />
      <div>
        <textarea value={emailBody} disabled={true} />
      </div>
    </div>
  );
};

export default JagForm;
