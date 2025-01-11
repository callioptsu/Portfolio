import Link from 'next/link'

// Material Ui
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

interface TimelineComponentProps {
  position: 'left' | 'right'
  isFinished: boolean
  courseUrl: string
  institution: string
  name: string
  finishedDate: string
  certificateUrl: string
}

export default function TimelineComponent({
  position,
  isFinished,
  courseUrl,
  institution,
  name,
  finishedDate,
  certificateUrl,
}: TimelineComponentProps) {
  return (
    <Timeline position={position}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={isFinished ? 'success' : 'primary'} />
          <TimelineConnector
            sx={{
              backgroundColor: 'black',
              width: '1vh',
              borderRadius: '50px',
            }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Link href={courseUrl} target="_blank" rel="noreferrer">
            <Typography variant="caption" sx={{ cursor: 'pointer' }}>
              {institution}
            </Typography>
          </Link>
          <Typography variant="caption">{finishedDate}</Typography>
          <Link href={certificateUrl} target="_blank" rel="noreferrer">
            <Typography variant="caption" sx={{ cursor: 'pointer' }}>
              {name}
            </Typography>
          </Link>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
