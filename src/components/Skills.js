import './Home.css'

export default function Skills() {
  return (
    <div className="Skills" id='Skill'>
      <h1 className='Title'><i className="bi bi-kanban"></i> Skills:</h1>
<br />
      <table className='Tables'>
      <tbody>
        <tr>
          
          <td className='skills_table'>Technologies</td>
          <td className='skills_table'>: HTML, CSS, ReactJs, Redux</td>
        </tr>
        <tr>
          <td className='skills_table'>Language</td>
          <td className='skills_table'>: Javscript</td>
        </tr>
        <tr>
          <td className='skills_table'>Library</td>
          <td className='skills_table'>: Bootstrap</td>
        </tr>
        <tr>
          <td className='skills_table'>Version Control</td>
          <td className='skills_table'>: GitHub</td>
        </tr>
        <tr>
          <td className='skills_table'>Knowledge on</td>
          <td className='skills_table'>: Api Integration, Deployment</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

