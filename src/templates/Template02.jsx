export default function Template02({
  firstName, lastName, jobTitle, company, email, phone, website,
  photoURL, linkedInURL, twitterURL,
}) {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#202124' }}>
      <tbody>
        <tr>
          {/* Avatar */}
          <td style={{ paddingRight: 12, verticalAlign: 'top' }}>
            <img
              src={photoURL || 'https://i.pravatar.cc/80?u=default'}
              alt=""
              width="80"
              height="80"
              style={{ borderRadius: '50%', display: 'block' }}
            />
          </td>

          {/* Info block */}
          <td style={{ verticalAlign: 'top' }}>
            <strong style={{ fontSize: '16px', lineHeight: 1.2 }}>{firstName} {lastName}</strong>
            <span style={{ display: 'block', color: '#5f6368', lineHeight: 1.3, marginTop: 2 }}>
              {jobTitle} · {company}
            </span>

            <span style={{ display: 'block', marginTop: 8 }}>
              <a href={`mailto:${email}`} style={{ color: '#c00000', textDecoration: 'none' }}>{email}</a>
              {phone && (
                <>
                  {' · '}
                  <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: '#c00000', textDecoration: 'none' }}>{phone}</a>
                </>
              )}
              <br />
              <a href={website} target="_blank" rel="noopener noreferrer" style={{ color: '#c00000', textDecoration: 'none' }}>
                {website.replace(/^https?:\/\//, '')}
              </a>
            </span>

            {/* Social icons - centered white badge */}
            <span style={{ display: 'block', marginTop: 8 }}>
              {linkedInURL && (
                <a href={linkedInURL} target="_blank" rel="noopener noreferrer" style={{ marginRight: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, background: '#fff', borderRadius: 4 }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width="14" height="14" style={{ fill: '#0077B5' }} />
                  </span>
                </a>
              )}
              {twitterURL && (
                <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, background: '#fff', borderRadius: 4, marginLeft: 4 }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X" width="14" height="14" style={{ fill: '#000' }} />
                  </span>
                </a>
              )}
            </span>
          </td>
        </tr>

        {/* Divider */}
        <tr>
          <td colSpan={2} style={{ paddingTop: 12, height: 1, backgroundColor: '#dadce0', fontSize: 0 }}>&nbsp;</td>
        </tr>

        {/* Disclaimer */}
        <tr>
          <td colSpan={2} style={{ paddingTop: 8, fontSize: '11px', color: '#80868b' }}>
            This email and any attachments are confidential and may be legally privileged.
          </td>
        </tr>
      </tbody>
    </table>
  );
}