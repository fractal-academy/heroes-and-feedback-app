import { Typography } from 'antd'
import { Box } from '@qonsoll/react-design'
import { ProjectAdvancedView } from 'app/domains/Project/components/views'
import { ProjectMemberList } from 'app/domains/ProjectMember/components/list'
import { ProjectMemberCombined } from 'app/domains/ProjectMember/components/combined'

const ProjectCombined = (props) => {
  const { data, subdata } = props

  return (
    <>
      <ProjectAdvancedView data={data} />
      <Typography.Title level={4}>Project team:</Typography.Title>
      {subdata?.length > 0 ? (
        <ProjectMemberList data={subdata} />
      ) : (
        <Box textAlign="center" mt={4}>
          <Typography.Text type="secondary">
            No one works with this project.
          </Typography.Text>
        </Box>
      )}
      <ProjectMemberCombined />
    </>
  )
}

export default ProjectCombined
