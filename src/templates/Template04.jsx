export default function Template01({
  firstName, lastName, jobTitle, company, email, phone, website,
  photoURL, linkedInURL, twitterURL,
}) {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#202124' }}>
      <tbody>
        <tr>
          {/* 头像 */}
          <td style={{ paddingRight: 12, verticalAlign: 'top' }}>
            <img
              src={photoURL || 'https://i.pravatar.cc/80?u=default'}
              alt=""
              width="80"
              height="80"
              style={{ borderRadius: '50%', display: 'block' }}
            />
          </td>

          {/* 信息区 */}
          <td style={{ verticalAlign: 'top' }}>
            <strong style={{ fontSize: '16px', lineHeight: 1.2 }}>{firstName} {lastName}</strong>
            <span style={{ display: 'block', color: '#5f6368', lineHeight: 1.3, marginTop: 2 }}>
              {jobTitle} · {company}
            </span>

            <span style={{ display: 'block', marginTop: 8 }}>
              <a href={`mailto:${email}`} style={{ color: '#6c757d', textDecoration: 'none' }}>{email}</a>
              {phone && (
                <>
                  {' · '}
                  <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: '#6c757d', textDecoration: 'none' }}>{phone}</a>
                </>
              )}
              <br />
              <a href={website} target="_blank" rel="noopener noreferrer" style={{ color: '#6c757d', textDecoration: 'none' }}>
                {website.replace(/^https?:\/\//, '')}
              </a>
            </span>

            {/* 社交图标 */}
            <span style={{ display: 'block', marginTop: 8 }}>
              {linkedInURL && (
                <a href={linkedInURL} target="_blank" rel="noopener noreferrer" style={{ marginRight: 6 }}>
                  <img src="https://cdn.simpleicons.org/linkedin/0077B5" alt="LinkedIn" width="16" height="16" />
                </a>
              )}
              {twitterURL && (
                <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.simpleicons.org/twitter/1DA1F2" alt="Twitter" width="16" height="16" />
                </a>
              )}
            </span>
          </td>
        </tr>

        {/* 分隔线 */}
        <tr>
          <td colSpan={2} style={{ paddingTop: 12, height: 1, backgroundColor: '#dadce0', fontSize: 0 }}>&nbsp;</td>
        </tr>

        {/* 免责 */}
        <tr>
          <td colSpan={2} style={{ paddingTop: 8, fontSize: '11px', color: '#80868b' }}>
            This email and any attachments are confidential and may be legally privileged.
          </td>
        </tr>
      </tbody>
    </table>
  );
}