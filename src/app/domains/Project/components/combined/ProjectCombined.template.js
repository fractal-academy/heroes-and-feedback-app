import { Typography } from 'antd'
import { Box } from '@qonsoll/react-design'
import { ProjectAdvancedView } from 'app/domains/Project/components/views'
import { ProjectMemberList } from 'app/domains/ProjectMember/components/list'
import { ProjectMemberCombined } from 'app/domains/ProjectMember/components/combined'

const ProjectCombined = (props) => {
  const { data, subdata, userId } = props

  const editedUserList = subdata?.map((item) => ({ ...item, id: item.userId }))

  return (
    <>
      <ProjectAdvancedView data={data} />
      <Typography.Title level={4}>Project team:</Typography.Title>
      {subdata?.length > 0 ? (
        <ProjectMemberList data={editedUserList} userId={userId} />
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
