<?php

namespace App\Entity;

use App\Repository\HardwareUnitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HardwareUnitRepository::class)]
class HardwareUnit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'hardwareUnits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?HardwareUnitType $hardwareUnitTypeId = null;

    #[ORM\ManyToOne(inversedBy: 'hardwareUnits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?HardwarePlacement $hardwarePlacementId = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdDate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $editedDate = null;

    #[ORM\OneToMany(mappedBy: 'hardwareUnitId', targetEntity: Measurement::class, orphanRemoval: true)]
    private Collection $measurements;

    public function __construct()
    {
        $this->measurements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHardwareUnitTypeId(): ?HardwareUnitType
    {
        return $this->hardwareUnitTypeId;
    }

    public function setHardwareUnitTypeId(?HardwareUnitType $hardwareUnitTypeId): self
    {
        $this->hardwareUnitTypeId = $hardwareUnitTypeId;

        return $this;
    }

    public function getHardwarePlacementId(): ?HardwarePlacement
    {
        return $this->hardwarePlacementId;
    }

    public function setHardwarePlacementId(?HardwarePlacement $hardwarePlacementId): self
    {
        $this->hardwarePlacementId = $hardwarePlacementId;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->createdDate;
    }

    public function setCreatedDate(\DateTimeInterface $createdDate): self
    {
        $this->createdDate = $createdDate;

        return $this;
    }

    public function getEditedDate(): ?\DateTimeInterface
    {
        return $this->editedDate;
    }

    public function setEditedDate(\DateTimeInterface $editedDate): self
    {
        $this->editedDate = $editedDate;

        return $this;
    }

    /**
     * @return Collection<int, Measurement>
     */
    public function getMeasurements(): Collection
    {
        return $this->measurements;
    }

    public function addMeasurement(Measurement $measurement): self
    {
        if (!$this->measurements->contains($measurement)) {
            $this->measurements->add($measurement);
            $measurement->setHardwareUnitId($this);
        }

        return $this;
    }

    public function removeMeasurement(Measurement $measurement): self
    {
        if ($this->measurements->removeElement($measurement)) {
            // set the owning side to null (unless already changed)
            if ($measurement->getHardwareUnitId() === $this) {
                $measurement->setHardwareUnitId(null);
            }
        }

        return $this;
    }
}
