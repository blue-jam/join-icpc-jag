import React, { MouseEvent, useState } from 'react';
import TextInput from './Form/TextInput';

interface WishList {
  problem: boolean;
  staff: boolean;
  affair: boolean;
}

interface EmailGenerateResult {
  error?: string;
  emailSubject: string;
  emailBody: string;
}

const generateEmailBody = (
  organization: string,
  name: string,
  handleName: string,
  icpcYear: string,
  icpcSchool: string,
  icpcTeam: string,
  wishList: WishList
): EmailGenerateResult => {
  if (!name) {
    return { error: '氏名は必須です', emailBody: '', emailSubject: '' };
  }

  if (!organization) {
    return { error: '所属は必須です', emailBody: '', emailSubject: '' };
  }

  const emailTitle = `ICPC OB OGの会入会希望　（${name}）`;

  let emailBody = 'こんにちは\n\n';
  emailBody += `${organization}の${name}です。ICPC OBOGの会への入会を希望します。\n`;
  emailBody += `必要情報は下記のとおりです。\n\n`;
  emailBody += `氏名: ${name}\n`;
  if (handleName) {
    emailBody += `ハンドルネーム: ${handleName}\n`;
  }
  if (icpcYear || icpcSchool || icpcTeam) {
    emailBody += `ICPC経験: `;
    if (icpcYear) {
      emailBody += icpcYear && `${icpcYear}年に`;
      emailBody += icpcSchool && `${icpcSchool}の`;
      emailBody += icpcTeam && `${icpcTeam}という`;
      if (icpcSchool || icpcTeam) {
        emailBody += 'チームで';
      }
      emailBody += '参加しました。\n';
    }
  }
  emailBody += `JAGで担当したいこと:\n`;
  if (wishList.problem) {
    emailBody += ` - 問題作成\n`;
  }
  if (wishList.staff) {
    emailBody += ` - 合宿・大会の現地スタッフ\n`;
  }
  if (wishList.affair) {
    emailBody += ` - 事務仕事\n`;
  }
  if (Object.values(wishList).every(flag => !flag)) {
    emailBody += ` - メーリングリストの受信のみ\n`;
  }

  emailBody += `\n以上です。よろしくお願いします。\n\n`;
  emailBody += `${name}`;

  return { emailBody, emailSubject: emailTitle };
};

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
  const [receiverEmail, setReceiverEmail] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleGenerateButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { error, emailBody } = generateEmailBody(
      organization,
      name,
      handleName,
      icpcYear,
      icpcSchool,
      icpcTeam,
      wishList
    );

    if (error) {
      window.alert(error);
      return;
    }

    setEmailBody(emailBody);
  };

  const handleSubmitButtonClick = (e: MouseEvent) => {
    e.preventDefault();

    const { error, emailBody, emailSubject } = generateEmailBody(
      organization,
      name,
      handleName,
      icpcYear,
      icpcSchool,
      icpcTeam,
      wishList
    );

    if (error) {
      window.alert(error);
      return;
    }

    setEmailBody(emailBody);

    window.location.href = `mailto:${receiverEmail}?subject=${encodeURI(
      emailSubject
    )}&body=${encodeURI(emailBody)}`;
  };

  return (
    <div>
      <form>
        <div>
          <img
            src="https://jag-icpc.org/?plugin=attach&refer=FrontPage&openfile=question.png"
            alt=""
          />
        </div>
        <div>
          <label htmlFor="receiver-email">送信先メールアドレス</label>
          <TextInput
            id="receiver-email"
            value={receiverEmail}
            setValue={setReceiverEmail}
          />
        </div>
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
        <button onClick={handleGenerateButtonClick}>加入メールを生成</button>
        <button onClick={handleSubmitButtonClick}>メーラーを起動する</button>
        <div>
          OSとブラウザ、メーラーの組み合わせによって、起動したときに文字化けをすることがあります。
          文字化けが起こる場合は、生成結果をコピーしてメーラーに貼り付けてください。
        </div>
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
