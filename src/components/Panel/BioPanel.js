import AspectRatio from "@mui/joy/AspectRatio";
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
// import '../../assets/scss/styles.scss'
import '../../assets/css/styles.scss';

// create BioPanel component
const BioPanel = () => {
    return (
        <Card
        variant="outlined"
        row
        sx={{
          width: 720,
          overflow : 'hidden',
          gap: 2,
          backgroundColor: '#fff',
          '&:hover': { boxShadow: '0 0 11px rgba(33,33,33,.2)', borderColor: 'neutral.outlinedHoverBorder' },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 270 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className="animated-title">
          <div className="text-top">
            <div>
              <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                    RANDRIAMADISON Felana Diamondra
              </Typography>
              <Typography fontSize="lg"  mb={1}>
                    <span>
                      RANDRIAMADISON Felana Diamondra
                    </span>
              </Typography>
                  {/* <Typography fontSize="sm" mb={1}>
                    <span>
                      Alternante developpeuse
                    </span>
                  </Typography> */}
              {/* <span>mimicking</span>
              <span>apple's design</span> */}
            </div>
          </div>
          <div className="text-bottom">
            <div>
              <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                <span>Here is my bio</span>
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    );
    }

// export BioPanel component
export default BioPanel;