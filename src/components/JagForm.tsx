import React, { useState } from 'react';
import TextInput from './Form/TextInput';

const JagForm: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [handleName, setHandleName] = useState('');
  const [icpcYear, setIcpcYear] = useState('');
  const [icpcSchool, setIcpcSchool] = useState('');
  const [icpcTeam, setIcpcTeam] = useState('');
  const [wishList, setWishList] = useState({
    problem: false,
    staff: false,
    affair: false
  });
  const [emailBody, setEmailBody] = useState('');

  const handleButtonClick = (e: any) => {
    e.preventDefault();

    if (!name) {
      window.alert('氏名は必須です');
      return;
    }
    if (!organization) {
      window.alert('所属は必須です');
      return;
    }

    let newEmailBody = 'こんにちは\n\n';
    newEmailBody += `${organization}の${name}です。ICPC OBOGの会への入会を希望します。\n`;
    newEmailBody += `必要情報は下記のとおりです。\n\n`;
    newEmailBody += `氏名: ${name}\n`;
    if (handleName) {
      newEmailBody += `ハンドルネーム: ${handleName}\n`;
    }
    if (icpcYear || icpcSchool || icpcTeam) {
      newEmailBody += `ICPC経験: `;
      if (icpcYear) {
        newEmailBody += icpcYear && `${icpcYear}年に`;
        newEmailBody += icpcSchool && `${icpcSchool}の`;
        newEmailBody += icpcTeam && `${icpcTeam}という`;
        if (icpcSchool || icpcTeam) {
          newEmailBody += 'チームで';
        }
        newEmailBody += '参加しました。\n';
      }
    }
    newEmailBody += `JAGで担当したいこと:\n`;
    if (wishList.problem) {
      newEmailBody += ` - 問題作成\n`;
    }
    if (wishList.staff) {
      newEmailBody += ` - 合宿・大会の現地スタッフ\n`;
    }
    if (wishList.affair) {
      newEmailBody += ` - 事務仕事\n`;
    }
    if (Object.values(wishList).every(flag => !flag)) {
      newEmailBody += ` - メーリングリストの受信のみ\n`;
    }

    newEmailBody += `\n以上です。よろしくお願いします。\n\n`;
    newEmailBody += `${name}`;

    setEmailBody(newEmailBody);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">氏名（本名）</label>
          <TextInput id="name" value={name} setValue={setName} />
        </div>
        <div>
          <label htmlFor="organization">所属</label>
          <TextInput
            id="organization"
            value={organization}
            setValue={setOrganization}
            placeholder="学校名または企業名"
          />
        </div>
        <div>
          <label htmlFor="handle">ハンドルネーム</label>
          <TextInput id="handle" value={handleName} setValue={setHandleName} />
        </div>
        <div>
          <div>
            <label htmlFor="icpc-year">ICPCに参加した年</label>
            <TextInput id="icpc-year" value={icpcYear} setValue={setIcpcYear} />
          </div>
          <div>
            <label htmlFor="icpc-school">ICPC参加時の所属</label>
            <TextInput
              id="icpc-school"
              value={icpcSchool}
              setValue={setIcpcSchool}
            />
          </div>
          <div>
            <label htmlFor="icpc-team">チーム名</label>
            <TextInput id="icpc-team" value={icpcTeam} setValue={setIcpcTeam} />
          </div>
        </div>
        <fieldset>
          <legend>JAGに入ってやりたいこと</legend>
          <label>
            <input
              type="checkbox"
              checked={wishList.problem}
              onChange={e => {
                setWishList(
                  Object.assign({}, wishList, {
                    problem: e.target.checked
                  })
                );
              }}
            />
            問題作成（原案、問題文作成・校正、データセット作成、テスターなど）
          </label>
          <label>
            <input
              type="checkbox"
              checked={wishList.staff}
              onChange={e => {
                setWishList(
                  Object.assign({}, wishList, {
                    staff: e.target.checked
                  })
                );
              }}
            />
            現地スタッフ（夏合宿やICPCアジア地区予選）
          </label>
          <label>
            <input
              type="checkbox"
              checked={wishList.affair}
              onChange={e => {
                setWishList(
                  Object.assign({}, wishList, {
                    affair: e.target.checked
                  })
                );
              }}
            />
            事務
          </label>
        </fieldset>
        <button onClick={handleButtonClick}>加入メールを生成</button>
      </form>
      <hr />
      <h2>生成結果</h2>
      <div>
        <div>
          <textarea
            id="email-body"
            value={emailBody}
            readOnly={true}
            cols={100}
            rows={18}
          />
        </div>
        <div>
          <button
            disabled={!emailBody}
            onClick={e => {
              e.preventDefault();

              const emailBodyForm = document.querySelector<HTMLInputElement>(
                '#email-body'
              );
              if (emailBodyForm) {
                emailBodyForm.select();
                document.execCommand('copy');
                window.alert('コピーしました');
              }
            }}
          >
            コピー
          </button>
        </div>
      </div>
    </div>
  );
};

export default JagForm;
